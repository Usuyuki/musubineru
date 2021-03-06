/** @jsx h */
import { h, PageProps } from "preact";
import { tw } from "@twind";
import Layout from "@๐/Layout/BasicLayout.tsx";
import SubmitButton from "@๐/Form/SubmitButton.tsx";
import QuestionTextArea from "@๐/Form/QuestionTextArea.tsx";
import { Handlers } from "$fresh/server.ts";
import ApiError from "@๐/Error/ApiError.tsx";
import { validate } from "@โ/validate/questionValidate.ts";
import { type ResultType } from "@ๅน/thinkResponseType.ts";
import ThinkResult from "@๐/Result/ThinkResult.tsx";
export interface Data {
  /** ใใชใใผใทใงใณใจใฉใผๆๅ ฑ */
  error: {
    what: string;
    why: string;
    how: string;
  };
  what?: string;
  why?: string;
  how?: string;
}

export const handler: Handlers<Data> = {
  async POST(req, ctx) {
    // ใใฉใผใ ใใผใฟใฎๅฅๅๅคใๅๅพ
    const formData = await req.formData();
    const what = formData.get("what")?.toString();
    const why = formData.get("why")?.toString();
    const how = formData.get("how")?.toString();

    const whatValidate = validate(what);
    const whyValidate = validate(why);
    const howValidate = validate(how);
    //1ใคใงใใใใฆใชใใฃใใๅผพใ
    if (
      !(
        whatValidate == "ใๅฅๅใใใใจใใใใใพใ" &&
        whyValidate == "ใๅฅๅใใใใจใใใใใพใ" &&
        howValidate == "ใๅฅๅใใใใจใใใใใพใ"
      )
    ) {
      return ctx.render({
        error: {
          what: whatValidate,
          why: whyValidate,
          how: howValidate,
        },
        what,
        why,
        how,
      });
    }

    const question = {
      what: what,
      why: why,
      how: how,
    };

    const resp = await fetch(Deno.env.get("API_URL") + "/think", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });

    if (resp.status === 404) {
      return ctx.render(null);
    }

    const result: ResultType = await resp.json();
    return ctx.render(result);
  },
};

export default function Page({
  data,
}: PageProps<Data | ResultType | null | undefined>) {
  if (typeof data == null) {
    return (
      <ApiError
        title="APIใจใฉใผ"
        details="APIใจใฎใใใจใใซใใใฆใจใฉใผใ็ใใพใใใ"
      />
    );
  }
  return (
    <Layout title="duck">
      <div class={tw("flex justify-center flex-col")}>
        <img
          class={tw("animate-pulse object-contain w-12 h-12 rotate-12 mx-auto")}
          src="/img/icon/duck.svg"
        />
        <p class={tw("text-center")}>
          ใฉใใผใใใฏใปใใใใฐใกใฝใใใๆก็จใใฆใใพใใ
        </p>
      </div>
      <form class={tw("rounded-xl p-5  mt-8")} method="POST">
        <div class={tw("flex flex-col ")}>
          <QuestionTextArea
            title="ใฉใใชใใญใธใงใฏใใไฝใใใจๆใฃใฆใพใใฎ๏ผ"
            name="what"
            value={data?.what}
            error={data?.error?.what}
          />
          <QuestionTextArea
            title="ใใญใใฏใใไฝใใใจๆใฃใฆใใ็็ฑใๆใใฆใใ ใใใพใ"
            name="why"
            value={data?.why}
            error={data?.error?.why}
          />
          <QuestionTextArea
            title="ใฉใใใฃใฆใใญใใฏใใไฝใใใจๆใฃใฆใพใใฎ๏ผ"
            name="how"
            value={data?.how}
            error={data?.error?.how}
          />
        </div>
        <div class={tw("flex justify-center mt-8")}>
          <SubmitButton title="ๅๅใฎๆค่จใใใ" />
        </div>
      </form>
      {data?.result ? <ThinkResult data={data} /> : ""}
      <p class={tw("text-center my-2 mx-2")}>
        ใใงใใ็ตๆ:{data?.result ? data.result : "ๆชๅฎ่ก"}
      </p>
    </Layout>
  );
}
