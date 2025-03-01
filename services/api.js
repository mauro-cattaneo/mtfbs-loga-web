const { DOMParser } = require("xmldom");
const cheerio = require("cheerio");

export async function fetchJobs(remoteUrl) {
  const response = await fetch(remoteUrl);

  const xmlData = await response.text();

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "text/xml");
  const jobNodes = xmlDoc.getElementsByTagName("job");
  const jobs = Array.from(jobNodes).map((jobNode) => {
    const id = jobNode.getElementsByTagName("id")[0]?.textContent || "";
    const referenceNumber =
      jobNode.getElementsByTagName("referenceNumber")[0]?.textContent || "";
    const title = jobNode.getElementsByTagName("title")[0]?.textContent || "";
    const url = jobNode.getElementsByTagName("url")[0]?.textContent || "";
    const shortName =
      jobNode.getElementsByTagName("shortName")[0]?.textContent || "";
    const location =
      jobNode.getElementsByTagName("location")[0]?.textContent || "";
    const mandant =
      jobNode.getElementsByTagName("mandant")[0]?.textContent || "";
    const country =
      jobNode.getElementsByTagName("country")[0]?.textContent || "";
    const hrConsultant =
      jobNode.getElementsByTagName("hrConsultant")[0]?.textContent || "";
    const publishFromDate =
      jobNode.getElementsByTagName("publishFromDate")[0]?.textContent || "";
    const publishToDate =
      jobNode.getElementsByTagName("publishToDate")[0]?.textContent || "";
    const content =
      jobNode.getElementsByTagName("content")[0]?.textContent || "";
    const longtext1 =
      jobNode.getElementsByTagName("longtext1")[0]?.textContent || "";
    const file1 = jobNode.getElementsByTagName("file1")[0]?.textContent || "";

    const hrConsultantsArr = hrConsultant.split(", ");

    const contentSenzaFontFamily = content.replace(/font-family[^;]+;/g, "");

    const $ = cheerio.load(content);
    let plainText = $.text();

    return {
      id,
      referenceNumber,
      title,
      url,
      shortName,
      location,
      mandant,
      country,
      hrConsultant,
      publishFromDate,
      publishToDate,
      hrConsultantsArr,
      content,
      longtext1,
      file1,
      contentSenzaFontFamily,
      plainText,
    };
  });

  return jobs;
}
