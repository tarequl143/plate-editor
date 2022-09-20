import {
  At,
  BracketsCurly,
  CheckSquareOffset,
  Equals,
  FigmaLogo,
  GridFour,
  Image,
  ListBullets,
  ListNumbers,
  Minus,
  PenNib,
  Quotes,
  TextHOne,
  TextHThree,
  TextHTwo,
  WarningCircle,
  YoutubeLogo,
} from "phosphor-react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../elements/BulletedList/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import { CUSTOM_ELEMENT_EMBED } from "../elements/Embed/types";
import {
  CUSTOM_ELEMENT_H1,
  CUSTOM_ELEMENT_H2,
  CUSTOM_ELEMENT_H3,
} from "../elements/Headings/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { CUSTOM_ELEMENT_IMAGE_OPTION } from "../elements/ImageOption/types";
import { CUSTOM_ELEMENT_MENTION_ITEM } from "../elements/Mention/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../elements/OrderedList/types";
import { CUSTOM_ELEMENT_SEPERATOR } from "../elements/Separator/types";
import { CUSTOM_ELEMENT_SKETCH } from "../elements/Sketch/types";
import { CUSTOM_ELEMENT_SPACER } from "../elements/Spacer/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../elements/Todolist/types";

export type ToolbarElement = {
  title: string;
  type: string;
  icon?: React.ReactNode;
  as?: string;
  additionalProps?: any;
};

export const SlashToolbarElements: ToolbarElement[] = [
  {
    title: "Heading 1",
    type: CUSTOM_ELEMENT_H1,
    icon: (
      <>
        <span className="icon">
          <TextHOne size={24} />
        </span>
        <span className="title">Heading 1</span>
      </>
    ),
  },
  {
    title: "Heading 2",
    type: CUSTOM_ELEMENT_H2,
    icon: (
      <>
        <span className="icon">
          <TextHTwo size={24} />
        </span>
        <span className="title">Heading 2</span>
      </>
    ),
  },
  {
    title: "Heading 3",
    type: CUSTOM_ELEMENT_H3,
    icon: (
      <>
        <span className="icon">
          <TextHThree size={24} />
        </span>
        <span className="title">Heading 3</span>
      </>
    ),
  },
  {
    title: "Image",
    type: CUSTOM_ELEMENT_IMAGE_OPTION,
    icon: (
      <>
        <span className="icon">
          <Image size={24} weight="duotone" />
        </span>
        <span className="title">Image</span>
      </>
    ),
  },
  {
    title: "Bullet List",
    type: CUSTOM_ELEMENT_BULLETED_LIST,
    icon: (
      <>
        <span className="icon">
          <ListBullets size={24} />
        </span>
        <span className="title">Bullet List</span>
      </>
    ),
  },
  {
    title: "Numbered List",
    type: CUSTOM_ELEMENT_ORDERED_LIST,
    icon: (
      <>
        <span className="icon">
          <ListNumbers size={24} />
        </span>
        <span className="title">Numbered List</span>
      </>
    ),
  },
  {
    title: "Table",
    type: "TABLE",
    icon: (
      <>
        <span className="icon">
          <GridFour size={24} weight="duotone" />
        </span>
        <span className="title">Table</span>
      </>
    ),
  },
  {
    title: "Checklist",
    type: CUSTOM_ELEMENT_TODO_LIST,
    icon: (
      <>
        <span className="icon">
          <CheckSquareOffset size={24} weight="duotone" />
        </span>
        <span className="title">Checklist</span>
      </>
    ),
  },
  {
    title: "Mention",
    type: CUSTOM_ELEMENT_MENTION_ITEM,
    icon: (
      <>
        <span className="icon">
          <At size={24} weight="duotone" />
        </span>
        <span className="title">Mention</span>
      </>
    ),
    // mouseDown: (editor: any, props: any) => {
    //   if (editor) {
    //     editor.deleteBackward("character");
    //     props.removeSlashToolbar();
    //     editor.insertText("@");
    //   }
    // },
  },
  {
    title: "Sketch",
    type: CUSTOM_ELEMENT_SKETCH,
    icon: (
      <>
        <span className="icon">
          <PenNib size={24} weight="duotone" />
        </span>
        <span className="title">Sketch</span>
      </>
    ),
  },
  {
    title: "Code Snippet",
    type: CUSTOM_ELEMENT_CODE_BLOCK,
    icon: (
      <>
        <span className="icon">
          <BracketsCurly size={24} />
        </span>
        <span className="title">Code Snippet</span>
      </>
    ),
  },
  {
    title: "Embed",
    type: CUSTOM_ELEMENT_EMBED,
    icon: (
      <>
        <span className="icon">
          <FigmaLogo size={24} weight="duotone" />
        </span>
        <span className="title">Embed</span>
      </>
    ),
    additionalProps: {
      type: "design",
    },
  },
  {
    title: "Embed",
    type: CUSTOM_ELEMENT_EMBED,
    icon: (
      <>
        <span className="icon">
          <YoutubeLogo size={24} weight="duotone" />
        </span>
        <span className="title">Embed</span>
      </>
    ),
    additionalProps: {
      type: "video",
    },
  },
  {
    title: "Hint",
    type: CUSTOM_ELEMENT_HINT,
    icon: (
      <>
        <span className="icon">
          <WarningCircle size={24} weight="duotone" />
        </span>
        <span className="title">Hint</span>
      </>
    ),
  },

  {
    title: "Seperator",
    type: CUSTOM_ELEMENT_SEPERATOR,
    icon: (
      <>
        <span className="icon">
          <Minus size={24} />
        </span>
        <span className="title">Seperator</span>
      </>
    ),
  },
  {
    title: "Blockquote",
    type: CUSTOM_ELEMENT_BLOCKQUOTE,
    icon: (
      <>
        <span className="icon">
          <Quotes size={24} weight="duotone" />
        </span>
        <span className="title">Quote</span>
      </>
    ),
  },
  //   {
  //     title: "Well",
  //     type: CUSTOM_ELEMENT_WELL,
  //     icon: (
  //       <>
  //         <span className="icon">
  //           <Tote size={24} weight="duotone" />
  //         </span>
  //         <span className="title">Well</span>
  //       </>
  //     ),
  //
  //   },
  {
    title: "Empty Space",
    type: CUSTOM_ELEMENT_SPACER,
    icon: (
      <>
        <span className="icon">
          <Equals size={24} />
        </span>
        <span className="title">Empty Space</span>
      </>
    ),
  },
];
