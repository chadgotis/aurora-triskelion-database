import React from "react";
import ChapterOfficers from "../components/ChapterOfficers";

const ChapterScreen = ({ match }) => {
  const council_id = match.params.council_id;
  const chapter_id = match.params.chapter_id;

  return (
    <>
      <ChapterOfficers council_id={council_id} chapter_id={chapter_id} />
    </>
  );
};

export default ChapterScreen;
