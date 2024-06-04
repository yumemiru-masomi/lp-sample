"use client";

import React from "react";
import { button } from "./styles.css";

type Props = {
  label?: string;
  children?: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button className={button}>{children}</button>;
};
