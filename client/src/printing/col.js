import { jsPDF } from "jspdf";
import imageApc from "../assets/APC.jpg";

export const certificateOfLegitimacy = (values, requested, governorGeneral) => {
  const lMargin = 15; //left margin in mm
  const rMargin = 15; //right margin in mm
  const pdfInMM = 215.9; // width of letter in mm

  const chapSingle = values.municipalCouncil.chapters.filter(
    (res) => res.name === values.chapter
  );

  console.log(values, chapSingle[0]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const initial = capitalizeFirstLetter(values.middleName);

  const fullName = `${capitalizeFirstLetter(values.firstName)} ${initial.charAt(
    0
  )}. ${capitalizeFirstLetter(values.lastName)}`;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let tYear = values.triskelionBirth.slice(0, 4);
  let tMonth = Number(values.triskelionBirth.slice(5, 7));
  let tDay = values.triskelionBirth.slice(8, 10);

  let selectedMonth = months[tMonth - 1];

  let chapter = values.chapter;
  let municipality = values.municipalCouncil.name;
  let batch = values.batchName;
  let alias = values.alias;
  let t_id = values.t_id;
  let today = new Date();
  let requestedBy = requested;
  let body = `\tThis is to certify that ${fullName.toUpperCase()} is a bonafide Brother of TAU GAMMA PHI/SIGMA TRISKELIONS GRAND FRATERNITY AND SORORITY of ${chapter} Chapter,${municipality} Municipal Council, Triskelion De Aurora Provincial Council.\n\n\tAs per record he was given his final rites dated ${selectedMonth} ${tDay}, ${tYear} of Batch '${batch.toUpperCase()}', alias "${alias.toUpperCase()}" with a Triskelion ID of ${t_id}.\n\nIssued this ${today.toLocaleString(
    "default",
    { month: "long" }
  )} ${today.getDate()}, ${today.getFullYear()} upon the request of ${requestedBy}.`;
  let content = body;

  const doc = new jsPDF("p", "mm", "letter");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.addImage(imageApc, 15, 18, 37, 37);
  doc.text("Tau Gamma Phi", 55, 25);
  doc.text("Tau Gamma Sigma", 55, 34);
  doc.setFontSize(12);
  doc.text("TRISKELIONS GRAND FRATERNITY AND SORORITY", 55, 42);
  doc.setFontSize(25);
  doc.text("AURORA PROVINCIAL COUNCIL", 55, 52);
  doc.line(15, 60, 200, 60);
  doc.setFont("times", "normal");
  doc.text("CERTIFICATE OF LEGITIMACY", 105, 75, "center");
  doc.setFontSize(15);

  let lines = doc.splitTextToSize(content, pdfInMM - lMargin - rMargin);
  doc.text(lMargin, 90, lines);
  doc.text("Certified true and correct", 15, 160);
  doc.setFont("times", "bold");
  doc.text(`${chapSingle[0].officers.grandTriskelion}`, 15, 174);
  doc.setFont("times", "italic");
  doc.text("Grand Triskelion", 15, 181);
  doc.text(`${chapSingle[0].name} Chapter`, 15, 188);

  doc.setFont("times", "bold");
  doc.text(`${values.municipalCouncil.officers.chairman}`, 15, 202);
  doc.setFont("times", "italic");
  doc.text("Municipal Chairman", 15, 209);
  doc.text(`${values.municipalCouncil.name} Municipal Council`, 15, 216);

  doc.setFont("times", "bold");
  doc.text(`${governorGeneral}`, 15, 230);
  doc.setFont("times", "italic");
  doc.text("Governor General", 15, 237);
  doc.text("Aurora Provincial Council", 15, 244);
  // doc.save("Generated.pdf");

  window.open(doc.output("bloburl"), "_blank");
};
