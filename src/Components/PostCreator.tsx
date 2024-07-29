import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Post } from "../Flows/Feeds";

interface PostCreatorProps {
  readOnly?: boolean;
  content?: Post;
}

export const PostCreator: React.FC<PostCreatorProps> = ({
  readOnly = false,
  content,
}) => {
  return (
    <div className="border-2 border-[#35373B] rounded-md bg-[#27292D] px-[20px] py-[24px] mt-4 text-left">
      <div className="font-bold text-lg text-[#C5C7CA]">
        {!readOnly && "Create post"}

        {readOnly && content && (
          <div className="flex items-center mb-4">
            <div className="flex">
              <div className="mr-3">
                <img
                  src={content.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                  width={44}
                  height={44}
                />
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="text-[12px] font-normal text-[#C5C7CA] leading-[20px]">
                    {content.name}
                  </div>
                  <div className="text-[12px] font-normal text-[#7D7F81] leading-[20px]">
                    {content.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Input
        type={"content"}
        label={""}
        value={content?.content}
        adornment={content?.emoji}
        onChange={readOnly ? undefined : () => {}}
        readOnly={readOnly}
        className="text-[#C5C7CA] bg-[#1E1F22] border-2 border-[#35373B] rounded-md px-3 py-2 w-full"
      />
      {!readOnly && (
        <div className="pt-[20px] flex justify-end">
          <Button
            label={"Post"}
            handleClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      )}
      {readOnly && (
        <div className="flex mt-4">
          <img src="/svgs/chat.svg" width={20} height={20} alt="comments" />
          <span className="text-[#7F8084] text-sm px-2">
            {" "}
            {content?.comments} comments
          </span>
        </div>
      )}
    </div>
  );
};
