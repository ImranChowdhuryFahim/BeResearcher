import React from "react";
import "./bodysection.css";

const ReviewAssignments = () => {
  const URL =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  const src = `https://docs.google.com/gview?url=${URL}&embedded=true`;

  return (
    <div className="review-assignment">
      <h1>Review Assingments</h1>
      <iframe
        src={src}
        title="Review Assignment PDF"
        frameborder="0"
        style={{ width: "100%", height: "700px", margin: "2px" }}
      ></iframe>
      <form>
        <input type="number" placeholder="Marks/points" />
        <textarea
          name="comment"
          placeholder="Comment/recommendation"
          id="comment"
          cols="50"
          rows="3"
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
};
export default ReviewAssignments;
