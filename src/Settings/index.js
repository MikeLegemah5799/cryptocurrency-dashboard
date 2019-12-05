import React from "react";
import Welcome from "./welcome-message.component";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";

export default function() {
  return (
    <Page name="settings">
      {" "}
      <Welcome />
      <ConfirmButton />
    </Page>
  );
}
