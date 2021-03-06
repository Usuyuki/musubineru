/** @jsx h */
import { h, PageProps } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";
import Layout from "@๐/Layout/BasicLayout.tsx";
import ApiError from "@๐/Error/ApiError.tsx";
import QuadCard from "@๐/top/QuadCard.tsx";
import TopCard from "@๐/top/TopCard.tsx";
import NormalLinkButton from "@๐/Button/NormalLinkButton.tsx";
interface PingType {
  status: string;
}

export const handler: Handlers<PingType | null> = {
  async GET(_, ctx) {
    const resp = await fetch(Deno.env.get("API_URL") + "/ping");
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const url: PingType = await resp.json();
    return ctx.render(url);
  },
};

export default function Page({ data }: PageProps<PingType | null>) {
  if (!data) {
    return (
      <ApiError
        title="APIใจใฉใผ"
        details="APIใจใฎใใใจใใซใใใฆใจใฉใผใ็ใใพใใใ"
      />
    );
  }
  return (
    <Layout title="top">
      <div class={tw("flex justify-center flex-col")}>
        <div
          class={
            tw("flex justify-around flex-wrap mx-auto order-2 md:order-1 ") +
            " quad-card-wrapper"
          }
        >
          <QuadCard target="ๅฐ่ชฌ" />
          <QuadCard target="ๅๆญ" />
          <QuadCard target="ๅ้ณ็ฐ็พฉ่ช" />
          <QuadCard target="้ก่ช" />
        </div>
        <div class={tw("md:order-2 order-1 ")}>
          <TopCard>
            <p class={tw("text-2xl text-center ")}>
              ใ ในใใใซใฏ
              <br />
              ใใญใใฏใใฎๅๅใ
              <br />
              ไธ็ทใซ่ใใ
              <br />
              ใตใผใในใงใใ
              <br />
            </p>
          </TopCard>
        </div>
      </div>
      <div class={tw("flex justify-center mb-20")}>
        <NormalLinkButton title="ใใฃใฆใฟใ" url="/duck" />
      </div>
      <p class={tw("text-center text-xs my-12 mx-2")}>
        API Status:{data.status}
      </p>
    </Layout>
  );
}
