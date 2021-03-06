/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@π/Layout/BasicLayout.tsx";
import CSCard from "@π/Card/CSCard.tsx";

export default function Page() {
  return (
    <Layout title="contact">
      <h1 class={tw("text-center mx-2 mt-10 mb-2 text-2xl")}>γεγεγγ</h1>
      <div class={tw("flex items-center justify-center flex-wrap")}>
        <CSCard
          title="γεγεγγγγ©γΌγ "
          url="https://forms.gle/3LYcZzydWGsgmy1a8"
        />
        <CSCard title="δ½θTwitter" url="https://twitter.com/usuyuki26" />
        <CSCard title="δ½θGitHub" url="https://github.com/Usuyuki" />
      </div>
    </Layout>
  );
}
