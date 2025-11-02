'use client';

import { useEffect, useState } from "react";

interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface MonthLabel {
  month: string;
  weekIndex: number;
}

export default function GitHubContributions() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchContributions = async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      const query = `
        query {
          user(login: "Aditya3403") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;
      
      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });
        
        const data = await res.json();
        const weeksData = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
        const total = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
        
        setWeeks(weeksData);
        setTotalContributions(total);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  const getMonthLabels = (): MonthLabel[] => {
    if (weeks.length === 0) return [];

    const months: MonthLabel[] = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    let lastMonth = -1;
    
    const totalWeeks = weeks.length;
    const sampleRate = Math.ceil(totalWeeks / 12);
    
    weeks.forEach((week, weekIndex) => {
      if (week.contributionDays.length > 0) {
        const firstDay = week.contributionDays[0];
        const date = new Date(firstDay.date);
        const month = date.getMonth();
        
        if (month !== lastMonth && (weekIndex === 0 || weekIndex % sampleRate === 0)) {
          months.push({
            month: monthNames[month],
            weekIndex
          });
          lastMonth = month;
        }
      }
    });

    return months;
  };

  const monthLabels = getMonthLabels();

  return (
    <div className="inline-block p-4 rounded-xl">
      {/* Month Labels */}
      <div className="flex mb-2 justify-between px-2">
        {monthLabels.map((label, index) => (
          <div
            key={index}
            className="text-xs text-gray-500 dark:text-white"
          >
            {label.month}
          </div>
        ))}
      </div>

      {/* Contribution Grid */}
      <div className="flex">
        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col mr-[3px]">
            {week.contributionDays.map((day: ContributionDay, dIdx: number) => (
              <div
                key={dIdx}
                className="w-3 h-3 mb-[3px] rounded-xs"
                style={{ backgroundColor: day.contributionCount > 0 ? day.color : '#242424ff' }}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-white">
        <span>
          {totalContributions} contributions in the last year
        </span>
        
        <div className="flex items-center space-x-2">
          <span>Less</span>
          <div className="flex space-x-[1px]">
            <div className="w-3 h-3 rounded-xs" style={{ backgroundColor: '#242424ff' }}></div>
            <div className="w-3 h-3 rounded-xs" style={{ backgroundColor: '#9be9a8' }}></div>
            <div className="w-3 h-3 rounded-xs" style={{ backgroundColor: '#40c463' }}></div>
            <div className="w-3 h-3 rounded-xs" style={{ backgroundColor: '#30a14e' }}></div>
            <div className="w-3 h-3 rounded-xs" style={{ backgroundColor: '#216e39' }}></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}