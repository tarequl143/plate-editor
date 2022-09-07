// import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate";

// export type ToolbarElement = {
//   title: string;
//   type: string;
//   icon?: React.ReactNode;
//   as?: string;
//   mouseDown?: (editor: any, props: IBallonToolbarProps) => void;
// };

// export const SlashToolbarElements: ToolbarElement[] = [
//   {
//     title: "Heading 1",
//     type: ELEMENT_H1,
//     icon: (
//       <>
//         <span className="icon" style={{ fontSize: "14px" }}>
//           H
//           <sub style={{ fontSize: "10px", fontWeight: 500, bottom: "-2px" }}>
//             1
//           </sub>
//         </span>{" "}
//         <span>Heading 1</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Heading 2",
//     type: ELEMENT_H2,
//     icon: (
//       <>
//         <span className="icon" style={{ fontSize: "14px" }}>
//           H
//           <sub style={{ fontSize: "10px", fontWeight: 500, bottom: "-2px" }}>
//             2
//           </sub>
//         </span>{" "}
//         <span>Heading 2</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Heading 3",
//     type: ELEMENT_H3,
//     icon: (
//       <>
//         <span className="icon" style={{ fontSize: "14px" }}>
//           H
//           <sub style={{ fontSize: "10px", fontWeight: 500, bottom: "-2px" }}>
//             3
//           </sub>
//         </span>{" "}
//         <span>Heading 3</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Bullet List",
//     type: CUSTOM_ELEMENT_BULLETED_LIST,
//     icon: (
//       <>
//         <span className="icon">
//           <BsListUl />
//         </span>{" "}
//         <span>Bullet List</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Numbered List",
//     type: CUSTOM_ELEMENT_ORDERED_LIST,
//     icon: (
//       <>
//         <span className="icon">
//           <BsListOl />
//         </span>{" "}
//         <span>Numbered List</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Table",
//     type: "TABLE",
//     icon: (
//       <>
//         <span className="icon">
//           <AiOutlineTable />
//         </span>{" "}
//         <span>Table</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Blockquote",
//     type: CUSTOM_ELEMENT_BLOCKQUOTE,
//     icon: (
//       <>
//         <span className="icon">
//           <IoMdQuote />
//         </span>{" "}
//         <span>Quote</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Hint",
//     type: CUSTOM_ELEMENT_HINT,
//     icon: (
//       <>
//         <span className="icon">
//           <AiOutlineExclamationCircle />
//         </span>{" "}
//         <span>Hint</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Checklist",
//     type: CUSTOM_ELEMENT_TODO_LIST,
//     icon: (
//       <>
//         <span className="icon">
//           <FiCheckSquare />
//         </span>{" "}
//         <span>Checklist</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Code Snippet",
//     type: CUSTOM_ELEMENT_CODE_BLOCK,
//     icon: (
//       <>
//         <span className="icon">
//           <BiCodeCurly />
//         </span>{" "}
//         <span>Code Snippet</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Embed",
//     type: CUSTOM_ELEMENT_EMBED,
//     icon: (
//       <>
//         <span className="icon">
//           <RiVideoLine />
//         </span>{" "}
//         <span>Embed</span>
//       </>
//     ),
//     as: "div",
//   },

//   {
//     title: "Mention",
//     type: CUSTOM_ELEMENT_MENTION_ITEM,
//     icon: (
//       <>
//         <span className="icon">
//           <GoMention />
//         </span>{" "}
//         <span>Mention</span>
//       </>
//     ),
//     as: "div",
//     mouseDown: (editor: any, props: any) => {
//       if (editor) {
//         editor.deleteBackward("character");
//         props.removeSlashToolbar();
//         editor.insertText("@");
//       }
//     },
//   },
//   {
//     title: "Seperator",
//     type: CUSTOM_ELEMENT_SEPERATOR,
//     icon: (
//       <>
//         <span className="icon">
//           <AiOutlineLine />
//         </span>{" "}
//         <span>Seperator</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Well",
//     type: CUSTOM_ELEMENT_WELL,
//     icon: (
//       <>
//         <span className="icon">
//           <BsBucket />
//         </span>{" "}
//         <span>Well</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Empty Space",
//     type: CUSTOM_ELEMENT_SPACER,
//     icon: (
//       <>
//         <span className="icon">
//           <BiSpaceBar />
//         </span>{" "}
//         <span>Empty Space</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Sketch",
//     type: CUSTOM_ELEMENT_SKETCH,
//     icon: (
//       <>
//         <span className="icon">
//           <BsPencil />
//         </span>{" "}
//         <span>Sketch</span>
//       </>
//     ),
//     as: "div",
//   },
//   {
//     title: "Image",
//     type: CUSTOM_ELEMENT_IMAGE_OPTION,
//     icon: (
//       <>
//         <span className="icon">
//           <BiImage />
//         </span>{" "}
//         <span>Image</span>
//       </>
//     ),
//     as: "div",
//   },
// ];

export {};
