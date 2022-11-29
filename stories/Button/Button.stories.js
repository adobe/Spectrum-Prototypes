/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { createButton } from "./Button";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Button",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    scaleMultiplier: {
      name: "active scale multiplier / 100 (74.4 = 0.744%)",
      defaultValue: 100,
      control: { type: "range", min: 70, max: 100, step: 0.1 },
    },
    duration: {
      name: "active duration (ms)",
      defaultValue: 80,
      control: { type: "range", min: 50, max: 200 },
    },
    ease: {
      name: "active ease function",
      defaultValue: "ease-out",
      options: ["ease-in-out", "ease-in", "ease-out", "ease-linear"],
      control: { type: "select" },
    },
    label: { control: "text" },
    hideLabel: { name: "hide label", control: "text" },
    icon: { control: "text" },
    variant: {
      options: ["accent", "primary", "secondary", "negative"],
      defaultValue: "accent",
      control: {
        type: "select",
        labels: {
          accent: "call to action",
          primary: "primary",
          secondary: "secondary",
          negative: "negative",
        },
      },
    },
    staticColor: {
      name: "static color",
      options: [false, "staticWhite", "staticBlack"],
      defaultValue: false,
      control: {
        type: "select",
        labels: {
          false: "none",
          staticWhite: "white",
          staticBlack: "black",
        },
      },
    },
    style: {
      options: ["fill", "outline"],
      defaultValue: "fill",
      control: { type: "select" },
    },
    size: {
      options: ["S", "M", "L", "XL"],
      defaultValue: "M",
      control: {
        type: "select",
        labels: {
          S: "small",
          M: "medium",
          L: "large",
          XL: "extra-large",
        },
      },
    },
    isJustified: {
      name: "is justified",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isPending: {
      name: "is pending",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isDisabled: {
      name: "is disabled",
      defaultValue: false,
      type: { name: "boolean" },
    },
    onClick: { action: "onClick" },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
};
