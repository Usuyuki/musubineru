/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@π/Layout/BasicLayout.tsx";
import DescCard from "@π/Card/DescCard.tsx";

export default function Page() {
  return (
    <Layout title="contact">
      <h1 class={tw("text-center mx-2 mt-10 mb-2 text-2xl")}>
        γγγ³γ­γγ¨γ―οΌ
      </h1>
      <div class={tw("flex items-center justify-center flex-col ")}>
        <DescCard title="ιηΊη΅η·―" icon="science">
          <p>ζθ²CAMPγ¨γγγγγ«γ½γ³γγγ£γγγ«ιηΊγγΎγγγ</p>
        </DescCard>
        <DescCard title="δ½Ώη¨ζθ‘" icon="article">
          <ul>
            <li>γγ­γ³γγ¨γ³γ:Deno, Fresh</li>
            <li>γγγ―γ¨γ³γ:Go, Gin</li>
            <li>θͺηΆθ¨θͺε¦η:Kagome</li>
          </ul>
        </DescCard>
      </div>
    </Layout>
  );
}
