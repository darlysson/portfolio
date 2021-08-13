import React from "react"
import { render } from "@testing-library/react"

import DownloadCVButton from "../components/DownloadCVButton"

describe("DownloadCVButton Test", () => {
  it("should render DownloadCVButton label correctly", () => {
    const { getByTestId } = render(<DownloadCVButton />)
    expect(getByTestId("downloadButton")).toHaveTextContent("Download CV")
  })
})
