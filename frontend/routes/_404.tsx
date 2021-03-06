/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";
import Layout from "@π/Layout/ErrorLayout.tsx";
export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout
      statusCode={404}
      title={"404 not found"}
      details={"γͺγ―γ¨γΉγγγγ" + url.pathname + "γ―ε­ε¨γγΎγγπ"}
    />
  );
}
