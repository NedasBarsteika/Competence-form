import React, { useEffect, useState } from "react";
import Image from "next/image";
import steps from "./images/steps.png";
import skillit from "./images/skillit.png";
import rightLine from "./images/RightLine.png";
import leftLine from "./images/LeftLine.png";
import "../app/globals.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { Button } from "./ui/button";
import axios from "axios";

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

export default function AdminPage({ token, onSignOut }: { token: string; onSignOut: () => void; }) {
    const [surveyData, setSurveyData] = useState<EmployeeData[]>([]);
    const [competenceTitles, setCompetenceTitles] = useState<string[]>([]);
    const [skillsAverage, setSkillsAverage] = useState<number[]>([]);

    const competencePoints: Record<string, string> = {
        "1": "Needs training",
        "2": "Training",
        "3": "Conceptual/trained",
        "4": "Experienced",
        "5": "Expert",
        "6": "Guru",
    };

    useEffect(() => {
        const fetchSurveyResults = async () => {
          try {
            const response = await axios.get<EmployeeData[]>(
              "https://localhost:7278/api/admin/surveyResults",
              {
                headers: {
                    Authorization: `Bearer ${token}`,                
                },
              }
            );
    
            const data = response.data;
            setSurveyData(data);
    
            // Extract competence titles dynamically
            if (data.length > 0) {
              const titles = data[0].competences.map((comp) => comp.competenceTitle);
              setCompetenceTitles(titles);
    
              // Calculate skills average
              const averages = titles.map((_, colIndex) => {
                const columnValues = data
                  .map((employee) => employee.competences[colIndex]?.value)
                  .filter((value) => value !== null) as number[];
    
                return (
                  columnValues.reduce((sum, value) => sum + value, 0) /
                  columnValues.length
                );
              });
              setSkillsAverage(averages);
            }
          } catch (error) {
            console.error("Error fetching survey results:", error);
          }
        };
    
        fetchSurveyResults();
      }, []);

    const getSkillColor = (value: number | null) => {
    switch (value) {
      case 1:
        return "bg-[#ff3c3c]";
      case 2:
        return "bg-[#ff9300]";
      case 3:
        return "bg-yellow-300";
      case 4:
        return "bg-[#a5ff99]";
      case 5:
        return "bg-[#00ff2d]";
      case 6:
        return "bg-[#119328]";
      default:
        return "bg-gray-300";
    }
  };

    return (
        <div className="relative px-6 py-8 bg-black text-white">
            <Button
                onClick={onSignOut}
                className="w-1/8 py-4 px-6 bg-red-500 rounded-full text-black font-medium flex items-center justify-center gap-2 hover:bg-red-400 transition-colors mb-10"
            >
                Sign Out
                <span className="text-xl">←</span>
            </Button>

            {/* Header with Logo and Text */}
            <div className="flex items-center mb-6">
                <Image src={steps} alt="Skillit Steps" width={50} height={50} />
                <h1 className="ml-4 text-xl">Quality Assurance</h1>
            </div>

            {/* Table Content Wrapper */}
            <div className="relative">
                <div className="overflow-hidden">
                    {/* Main Scrollable Content with OverlayScrollbars */}
                    <OverlayScrollbarsComponent
                        options={{
                            scrollbars: {
                                visibility: "auto", // Show scrollbars when scrolling
                                autoHide: "never", // Keep scrollbars always visible
                            },
                        }}
                        className="overflow-y-scroll hide-vertical-scrollbar"
                        style={{
                            maxHeight: "calc(100vh - 200px",
                            overflowX: 'hidden',
                            paddingBottom: "40px",    // Create space for the scrollbar below the table
                        }}
                    >
                        <table
                            className="w-full table-fixed border border-black"
                            style={{
                                borderCollapse: "separate",
                                borderSpacing: "0",
                                tableLayout: "fixed", // Ensures column widths are respected
                            }}
                        >
                            <thead>
                                <tr>
                                    {/* Sticky EMPLOYEES Header */}
                                    <th
                                        className="sticky top-0 left-0 bg-[#08ec3c] text-black font-bold text-center px-2 py-4 z-30"
                                        style={{
                                            width: "250px",
                                            height: "60px",
                                            border: "1px solid black",
                                            boxShadow: "1px 1px 0 black",
                                        }}
                                    >
                                        EMPLOYEES
                                    </th>
                                    {competenceTitles.map((title, index) => (
                                            <th
                                                key={index}
                                                className="sticky top-0 bg-white text-black font-bold text-center px-2 py-4 z-20"
                                                style={{
                                                    width: "180px",
                                                    height: "80px",
                                                    border: "1px solid black",
                                                    boxShadow: "0 1px 0 black",
                                                }}
                                            >
                                                {title}
                                            </th>
                                        ))}
                                </tr>
                            </thead>
                            <tbody>
                                {surveyData.map((employee, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {/* Sticky EMPLOYEES Row */}
                                        <td
                                            className="sticky left-0 bg-white text-black font-medium text-center px-2 py-4 z-10"
                                            style={{
                                                width: "180px",
                                                height: "60px",
                                                border: "1px solid black",
                                                boxShadow: "1px 0 0 black",
                                            }}
                                        >
                                            {employee.authorUsername || `Team Member ${rowIndex + 1}`}
                                        </td>
                                        {employee.competences.map((competence, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className={`text-black text-center font-medium px-2 py-4 border border-black ${getSkillColor(
                                                    competence.value
                                                  )}`}
                                                style={{
                                                    width: "180px",
                                                    height: "60px",
                                                }}
                                            >
                                                {competence.value !== null ? competence.value : "N/A"}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                <tr>
                                    {/* Sticky Skills Average Row */}
                                    <td
                                        className="sticky left-0 bg-gray-500 text-black font-bold text-center px-2 py-4 z-10"
                                        style={{
                                            width: "180px",
                                            height: "60px",
                                            border: "1px solid black",
                                            boxShadow: "1px 0 0 black",
                                        }}
                                    >
                                        Skills Average
                                    </td>
                                    {skillsAverage.map((average, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`text-black text-center font-bold px-2 py-4 border border-black ${getSkillColor(
                                                Math.round(average)
                                            )}`}
                                            style={{
                                                width: "180px",
                                                height: "60px",
                                            }}
                                        >
                                            {average.toFixed(2)}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </OverlayScrollbarsComponent>
                </div>
            </div>
            {/* Footer with Wavy Line Drawn in SVG */}
            <div className="relative mt-6">
                {/* Centered Logo */}
                <div className="flex justify-center mt-16">
                    <Image src={skillit} alt="Skillit Logo" width={50} height={50} />
                </div>
            </div>
        </div>
    );
}