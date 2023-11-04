type contestData = {
    platformName: string,
    contests: {
        contestName: string,
        startTime: string,
        duration: number,
        key: number
    }[]
}

export const ContestMockData: contestData[] = [
    {
        platformName: "Codeforces",
        contests: [
            {
                key: 1,
                contestName: "round 1",
                startTime: "8:00",
                duration: 90
            },
            {
                key: 2,
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
                key: 3,
                contestName: "round 1",
                startTime: "8:00",
                duration: 90
            },
            {
                key: 4,
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
                key: 5,
                contestName: "round 1",
                startTime: "8:00",
                duration: 90
            },
            {
                key: 6,
                contestName: "round 2", 
                startTime: "9:30", 
                duration: 120 
            }
        ]
    }
];
