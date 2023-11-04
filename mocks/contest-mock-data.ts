type contestData = {
    platformName: string,
    contests: {
        contestName: string,
        startTime: string,
        duration: number
    }[]
}

export const ContestMockData: contestData[] = [
    {
        platformName: "Codeforces",
        contests: [
            {
                contestName: "round 1",
                startTime: "8:00",
                duration: 90
            },
            {
                contestName: "round 2", 
                startTime: "9:30", 
                duration: 120 
            }
        ]
    },
    {
        platformName: "Leetcode",
        contests: [
            {
                contestName: "round 1",
                startTime: "8:00",
                duration: 90
            },
            {
                contestName: "round 2", 
                startTime: "9:30", 
                duration: 120 
            }
        ]
    },
    {
        platformName: "Codechef",
        contests: [
            {
                contestName: "round 1",
                startTime: "8:00",
                duration: 90
            },
            {
                contestName: "round 2", 
                startTime: "9:30", 
                duration: 120 
            }
        ]
    }
];
