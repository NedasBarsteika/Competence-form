import { Button } from "@/components/ui/button"
import logo from "./images/skillit.png";
import steps from "./images/steps.png";
import Image from 'next/image';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type Competence = {
  competenceId: string;
  competenceTitle: string;
  value: number | null;
};

type EmployeeData = {
  recordId: string;
  authorId: string;
  authorUsername: string;
  competences: Competence[];
  submittedAt: string;
};

export default function ThankYouPage({ surveyData, onFinish }: { surveyData: EmployeeData | null; onFinish: () => void }) {
  const getSkillColor = (value: number | null) => {
    switch (value) {
      case 1:
        return "bg-[#eb4444]";
      case 2:
        return "bg-[#ff9300]";
      case 3:
        return "bg-yellow-300";
      case 4:
        return "bg-[#a5ff99]";
      case 5:
        return "bg-[#00ff2d]";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-between p-8">
      <Image
        src={steps}
        alt="Competence Form"
        className="h-30 w-60 mt-10 max-w-lg transition-all"
      />

      <h2 className="text-xl text-center font-bold max-w-md mx-8 tracking-wide mt-5">
        Thank you! Your feedback will be sent to your manager.
      </h2>

      {/* Table Content Wrapper for Single User */}
      <div className="relative mt-5 mb-5 md:w-1/4">
        <div className="overflow-hidden">
          {/* Main Scrollable Content with OverlayScrollbars */}
          <OverlayScrollbarsComponent
            options={{
              scrollbars: {
                visibility: "auto",
                autoHide: "never",
              },
            }}
            className="overflow-y-scroll hide-vertical-scrollbar"
            style={{
              maxHeight: "calc(100vh - 200px)",
              overflowX: "hidden",
              paddingBottom: "40px",
            }}
          >
            <table
              className="w-full table-auto border border-black"
              style={{
                borderCollapse: "collapse",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr>
                  {/* Header: Skill Titles */}
                  <th
                    className="bg-[#08ec3c] text-black font-bold text-center px-2 py-4"
                    style={{
                      border: "1px solid black",
                      height: "60px",
                      boxShadow: "1px 1px 0 black",
                    }}
                  >
                    SKILL
                  </th>
                  <th
                    className="bg-[#08ec3c] text-black font-bold text-center px-2 py-4"
                    style={{
                      border: "1px solid black",
                      height: "60px",
                      boxShadow: "1px 1px 0 black",
                    }}
                  >
                    LEVEL
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Display Data for a Single User */}
                {surveyData?.competences.map((competence: Competence, index: number) => (
                  <tr key={index}>
                    {/* Skill Title */}
                    <td
                      className="bg-white text-black font-medium text-center px-2 py-4"
                      style={{
                        border: "1px solid black",
                        height: "60px",
                      }}
                    >
                      {competence.competenceTitle}
                    </td>
                    {/* Skill Level */}
                    <td
                      className={`text-black text-center font-medium px-2 py-4 border border-black ${getSkillColor(
                        competence.value
                      )}`}
                      style={{
                        height: "60px",
                      }}
                    >
                      {competence.value !== null ? competence.value : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </OverlayScrollbarsComponent>
        </div>
      </div>

      <div className="space-y-10 mb-5">
        <Button
          onClick={onFinish}
          className="w-full py-4 px-6 bg-green-500 rounded-full text-black font-medium hover:bg-green-400 transition-colors"
        >
          OK
        </Button>
        <Image
          src={logo}
          alt="Skillit Logo"
          className="h-15 w-20 max-w-lg mx-auto transition-all"
        />
      </div>
    </div>
  )
}

