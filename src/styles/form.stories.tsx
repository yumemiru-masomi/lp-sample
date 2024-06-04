import React from "react";

import {
  formErrorText,
  inputText,
  selectField,
  textareaField,
} from "./form.css";

export const Story = () => (
  <>
    <div style={{ marginBottom: 80 }}>
      <h1>errorなし</h1>
      <hr />
      <div style={{ marginBottom: 10 }}>
        <div>
          <input
            type="text"
            className={inputText({ error: false })}
            placeholder="表示名"
          />
          <p className={formErrorText}>Error Text</p>
        </div>
        <br />
        <div>
          <select className={selectField({ error: false })}>
            <option>foo</option>
            <option>bar</option>
          </select>
          <p className={formErrorText}>Error Text</p>
        </div>
        <br />
        <div>
          <textarea
            className={textareaField({ error: false })}
            placeholder="表示名"
          ></textarea>
          <p className={formErrorText}>Error Text</p>
        </div>
      </div>
    </div>
    <div style={{ marginBottom: 80 }}>
      <h1>errorあり</h1>
      <hr />
      <div style={{ marginBottom: 10 }}>
        <div>
          <input
            type="text"
            className={inputText({ error: true })}
            placeholder="表示名"
          />
          <p className={formErrorText}>Error Text</p>
        </div>
        <br />
        <div>
          <select className={selectField({ error: true })}>
            <option>foo</option>
            <option>bar</option>
          </select>
          <p className={formErrorText}>Error Text</p>
        </div>
        <br />
        <div>
          <textarea
            className={textareaField({ error: true })}
            placeholder="表示名"
          ></textarea>
          <p className={formErrorText}>Error Text</p>
        </div>
      </div>
    </div>
  </>
);

export default {
  title: "style/form",
  tags: ["autodocs"],
};
