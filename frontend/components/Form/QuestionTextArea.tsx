/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { validate } from "@⚙/validate/questionValidate.ts";

interface QuestionTextAreaType {
  title: string;
  name: string;
  value?: string;
  error?: string;
}

export default function QuestionTextArea({
  title,
  name,
  value,
  error,
}: QuestionTextAreaType) {
  return (
    <div class={tw("mt-4")}>
      <label class={tw("text-xl")} htmlFor={name + "Form"}>
        {title}
      </label>
      <textarea
        id={name + "Form"}
        rows={5}
        class={tw("w-full p-2 rounded-md bg-m8u_white text-m8u_black")}
        name={name}
        value={value}
      />
      <p class={tw("text-m8u_4 text-sm")}>{error}</p>
    </div>
  );
}
