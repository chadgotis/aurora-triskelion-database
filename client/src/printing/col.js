import { jsPDF } from "jspdf";
import imageApc from "../assets/APC.jpg";

export const samplePDF = () => {
  const lMargin = 15; //left margin in mm
  const rMargin = 15; //right margin in mm
  const pdfInMM = 215.9; // width of letter in mm

  let name = "Bro. Mark Gerald Obal";
  let chapter = "Wesleyan University-Philippines (Aurora Campus) Chapter";
  let municipality = "Maria Aurora Municipal Council";
  let tbirth = "February 14,2009";
  let batch = "B";
  let alias = "BONE";
  let today = new Date();
  let requestedBy = "Bro. Mark Gerald Obal";
  let body = `\tThis is to certify that ${name} is a bonafide Brother of TAU GAMMA PHI/SIGMA TRISKELIONS GRAND FRATERNITY AND SORORITY of ${chapter},${municipality}, Triskelion De Aurora Provincial Council.\n\n\tAs per record he was given his final rites dated ${tbirth} of Batch '${batch}', alias "${alias}".\n\nIssued this ${today.toLocaleString(
    "default",
    { month: "long" }
  )} ${today.getDay()}, ${today.getFullYear()} upon the request of ${requestedBy}`;
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
  // "Apple's iPhone 7 is officially upon us. After a week of pre-orders, the latest in the iPhone lineup officially launches today.\n\nEager Apple fans will be lining up out the door at Apple and carrier stores around the country to grab up the iPhone 7 and iPhone 7 Plus, while Android owners look on bemusedly.\n\nDuring the Apple Event last week, the tech giant revealed a number of big, positive changes coming to the iPhone 7. It's thinner. The camera is better. And, perhaps best of all, the iPhone 7 is finally water resistant.\n\nStill, while there may be plenty to like about the new iPhone, there's plenty more that's left us disappointed. Enough, at least, to make smartphone shoppers consider waiting until 2017, when Apple is reportedly going to let loose on all cylinders with an all-glass chassis design.";

  let lines = doc.splitTextToSize(content, pdfInMM - lMargin - rMargin);
  doc.text(lMargin, 90, lines);
  doc.text("Certified true and correct", 15, 160);
  doc.setFont("times", "bold");
  doc.text("Bro. Aldrin Viernes", 15, 174);
  doc.setFont("times", "italic");
  doc.text("Grand Triskelion", 15, 181);
  doc.text("Wesleyan University-Philippines Chapter", 15, 188);

  doc.setFont("times", "bold");
  doc.text("Bro. Aldrin Viernes", 15, 202);
  doc.setFont("times", "italic");
  doc.text("Municipal Chairman", 15, 209);
  doc.text("Maria Aurora Municipal Council", 15, 216);

  doc.setFont("times", "bold");
  doc.text("Bro. Aldrin Viernes", 15, 230);
  doc.setFont("times", "italic");
  doc.text("Governor General", 15, 237);
  doc.text("Aurora Provincial Council", 15, 244);
  // doc.save("Generated.pdf");

  window.open(doc.output("bloburl"), "_blank");
};
