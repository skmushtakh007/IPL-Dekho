/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InPageNavigation from "./inPageNavigation";


function MatchDetail() {
  let { id } = useParams();

  let fixedData = {
    "matchInfo": {
      "matchId": 89654,
      "matchDescription": "1st Match",
      "matchFormat": "T20",
      "matchType": "league",
      "complete": true,
      "domestic": false,
      "matchStartTimestamp": 1711117800000,
      "matchCompleteTimestamp": 1711131906450,
      "dayNight": false,
      "year": 2024,
      "state": "complete",
      "team1": {
        "id": 58,
        "name": "Chennai Super Kings",
        "playerDetails": [
          {
            "id": 11813,
            "name": "Ruturaj Gaikwad",
            "fullName": "Ruturaj Gaikwad",
            "nickName": "Gaikwad",
            "captain": true,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "CSK",
            "faceImageId": 333874
          },
          {
            "id": 11177,
            "name": "Rachin Ravindra",
            "fullName": "Rachin Ravindra",
            "nickName": "Ravindra",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "CSK",
            "faceImageId": 351609,
            "isOverseas": true
          },
          {
            "id": 1447,
            "name": "Ajinkya Rahane",
            "fullName": "Ajinkya Rahane",
            "nickName": "Rahane",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "CSK",
            "faceImageId": 332892
          },
          {
            "id": 10713,
            "name": "Daryl Mitchell",
            "fullName": "Daryl Mitchell",
            "nickName": "Mitchell",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "CSK",
            "faceImageId": 351601,
            "isOverseas": true
          },
          {
            "id": 587,
            "name": "Ravindra Jadeja",
            "fullName": "Ravindra Jadeja",
            "nickName": "Jadeja",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "CSK",
            "faceImageId": 352483
          },
          {
            "id": 14700,
            "name": "Sameer Rizvi ",
            "fullName": "Sameer Rizvi ",
            "nickName": "Sameer Rizvi ",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "CSK",
            "faceImageId": 182026
          },
          {
            "id": 265,
            "name": "Dhoni",
            "fullName": "MS Dhoni",
            "nickName": "Dhoni",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": true,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "CSK",
            "faceImageId": 170677
          },
          {
            "id": 7836,
            "name": "D Chahar",
            "fullName": "Deepak Chahar",
            "nickName": "Chahar",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "CSK",
            "faceImageId": 226392
          },
          {
            "id": 18504,
            "name": "M Theekshana",
            "fullName": "Maheesh Theekshana",
            "nickName": "Theekshana",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "CSK",
            "faceImageId": 351936,
            "isOverseas": true
          },
          {
            "id": 9863,
            "name": "Mustafizur",
            "fullName": "Mustafizur Rahman",
            "nickName": "Mustafizur",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left Arm fast medium",
            "teamName": "CSK",
            "faceImageId": 351909,
            "inMatchChange": "MOUT",
            "isOverseas": true
          },
          {
            "id": 11307,
            "name": "Tushar Deshpande",
            "fullName": "Tushar Deshpande",
            "nickName": "Tushar Deshpande",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "CSK",
            "faceImageId": 190903
          },
          {
            "id": 8683,
            "name": "Thakur",
            "fullName": "Shardul Thakur",
            "nickName": "Thakur",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "CSK",
            "faceImageId": 352487,
            "splSubstitute": true
          },
          {
            "id": 11195,
            "name": "Shivam Dube",
            "fullName": "Shivam Dube",
            "nickName": "Shivam Dube",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "CSK",
            "faceImageId": 183291,
            "inMatchChange": "MIN",
            "splSubstitute": true
          },
          {
            "id": 22571,
            "name": "Shaik Rasheed",
            "fullName": "Shaik Rasheed",
            "nickName": "Shaik Rasheed",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "CSK",
            "faceImageId": 182026,
            "splSubstitute": true
          },
          {
            "id": 22576,
            "name": "Nishant Sindhu",
            "fullName": "Nishant Sindhu",
            "nickName": "Nishant Sindhu",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "CSK",
            "faceImageId": 182026,
            "splSubstitute": true
          },
          {
            "id": 6692,
            "name": "Moeen",
            "fullName": "Moeen Ali",
            "nickName": "Moeen Ali",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "CSK",
            "faceImageId": 351579,
            "splSubstitute": true,
            "isOverseas": true
          },
          {
            "id": 10100,
            "name": "Santner",
            "fullName": "Mitchell Santner",
            "nickName": "Santner",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "CSK",
            "faceImageId": 351608
          },
          {
            "id": 11777,
            "name": "Ajay Mandal",
            "fullName": "Ajay Jadav Mandal",
            "nickName": "Ajay Mandal",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "CSK",
            "faceImageId": 182026
          },
          {
            "id": 12805,
            "name": "Prashant Solanki",
            "fullName": "Prashant Solanki",
            "nickName": "Solanki",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "CSK",
            "faceImageId": 182026
          },
          {
            "id": 13184,
            "name": "Mukesh Choudhary",
            "fullName": "Mukesh Choudhary",
            "nickName": "Mukesh Choudhary",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "",
            "teamName": "CSK",
            "faceImageId": 182026
          },
          {
            "id": 14163,
            "name": "Simarjeet Singh",
            "fullName": "Simarjeet Singh",
            "nickName": "Simarjeet Singh",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "CSK",
            "faceImageId": 182026
          },
          {
            "id": 14599,
            "name": "RS Hangargekar",
            "fullName": "RS Hangargekar",
            "nickName": "RS Hangargekar",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "CSK",
            "faceImageId": 226294
          },
          {
            "id": 51767,
            "name": "Aravelly Avanish",
            "fullName": "Aravelly Avanish",
            "nickName": "Aravelly Avanish",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 58,
            "battingStyle": "LEFT",
            "bowlingStyle": "",
            "teamName": "CSK",
            "faceImageId": 182026
          },
          {
            "id": 49,
            "name": "Stephen Fleming",
            "fullName": "Stephen Fleming",
            "nickName": "Stephen Fleming",
            "role": "Head coach",
            "teamId": 58,
            "teamName": "CSK",
            "faceImageId": 151497,
            "isSupportStaff": true
          },
          {
            "id": 4772,
            "name": "Michael Hussey",
            "fullName": "Michael Hussey",
            "nickName": "M Hussey",
            "role": "Batting coach",
            "teamId": 58,
            "teamName": "CSK",
            "faceImageId": 180290,
            "isSupportStaff": true
          },
          {
            "id": 242,
            "name": "Dwayne Bravo",
            "fullName": "Dwayne Bravo",
            "nickName": "Dwayne Bravo",
            "role": "Bowling coach",
            "teamId": 58,
            "teamName": "CSK",
            "faceImageId": 171033,
            "isSupportStaff": true
          },
          {
            "id": 42611,
            "name": "Rajiv Kumar",
            "fullName": "Rajiv Kumar",
            "nickName": "Rajiv Kumar",
            "role": "Batting and Fielding Coach",
            "teamId": 58,
            "teamName": "CSK",
            "faceImageId": 182026,
            "isSupportStaff": true
          },
          {
            "id": 5487,
            "name": "Eric Simons",
            "fullName": "Eric Simons",
            "nickName": "Simons",
            "role": "Bowling Consultant",
            "teamId": 58,
            "teamName": "CSK",
            "faceImageId": 157813,
            "isSupportStaff": true
          }
        ],
        "shortName": "CSK"
      },
      "team2": {
        "id": 59,
        "name": "Royal Challengers Bengaluru",
        "playerDetails": [
          {
            "id": 7825,
            "name": "du Plessis",
            "fullName": "Faf du Plessis",
            "nickName": "du Plessis",
            "captain": true,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "RCB",
            "faceImageId": 170639,
            "isOverseas": true
          },
          {
            "id": 1413,
            "name": "Kohli",
            "fullName": "Virat Kohli",
            "nickName": "Kohli",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RCB",
            "faceImageId": 332891
          },
          {
            "id": 10636,
            "name": "Rajat Patidar",
            "fullName": "Rajat Patidar",
            "nickName": "Rajat Patidar",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "RCB",
            "faceImageId": 234983
          },
          {
            "id": 7662,
            "name": "Maxwell",
            "fullName": "Glenn Maxwell",
            "nickName": "Maxwell",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "RCB",
            "faceImageId": 352454,
            "isOverseas": true
          },
          {
            "id": 12225,
            "name": "Green",
            "fullName": "Cameron Green",
            "nickName": "Green",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RCB",
            "faceImageId": 352451,
            "isOverseas": true
          },
          {
            "id": 145,
            "name": "Karthik",
            "fullName": "Dinesh Karthik",
            "nickName": "Karthik",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "RCB",
            "faceImageId": 244969,
            "inMatchChange": "MOUT"
          },
          {
            "id": 13135,
            "name": "Anuj Rawat",
            "fullName": "Anuj Rawat",
            "nickName": "Anuj Rawat",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": true,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "",
            "teamName": "RCB",
            "faceImageId": 226472
          },
          {
            "id": 1844,
            "name": "Karn Sharma",
            "fullName": "Karn Sharma",
            "nickName": "Karn Sharma",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "RCB",
            "faceImageId": 226391
          },
          {
            "id": 11220,
            "name": "Alzarri Joseph",
            "fullName": "Alzarri Joseph",
            "nickName": "Alzarri Joseph",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 244661,
            "isOverseas": true
          },
          {
            "id": 10953,
            "name": "Mayank Dagar",
            "fullName": "Mayank Dagar",
            "nickName": "Mayank Dagar",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "RCB",
            "faceImageId": 182026
          },
          {
            "id": 10808,
            "name": "Siraj",
            "fullName": "Mohammed Siraj",
            "nickName": "Siraj",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 352491
          },
          {
            "id": 14172,
            "name": "Yash Dayal",
            "fullName": "Yash Dayal",
            "nickName": "Yash Dayal",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 182026,
            "inMatchChange": "MIN",
            "splSubstitute": true
          },
          {
            "id": 14726,
            "name": "Akash Deep",
            "fullName": "Akash Deep",
            "nickName": "Akash Deep",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RCB",
            "faceImageId": 182026,
            "splSubstitute": true,
            "isOverseas": false
          },
          {
            "id": 12669,
            "name": "Prabhudessai",
            "fullName": "Suyash Prabhudessai",
            "nickName": "Prabhudessai",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "RCB",
            "faceImageId": 182026,
            "splSubstitute": true,
            "isOverseas": false
          },
          {
            "id": 10238,
            "name": "Swapnil Singh",
            "fullName": "Swapnil Singh",
            "nickName": "Swapnil Singh",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "RCB",
            "faceImageId": 182026,
            "splSubstitute": true
          },
          {
            "id": 10486,
            "name": "Vijaykumar Vyshak",
            "fullName": "Vijaykumar Vyshak",
            "nickName": "Vijaykumar Vyshak",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RCB",
            "faceImageId": 182026,
            "splSubstitute": true
          },
          {
            "id": 10954,
            "name": "Lomror",
            "fullName": "Mahipal Lomror",
            "nickName": "Lomror",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "RCB",
            "faceImageId": 226541
          },
          {
            "id": 8349,
            "name": "R Topley",
            "fullName": "Reece Topley",
            "nickName": "Topley",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Left Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 351852
          },
          {
            "id": 9522,
            "name": "Tom Curran",
            "fullName": "Tom Curran",
            "nickName": "Tom Curran",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 170967
          },
          {
            "id": 10692,
            "name": "Lockie Ferguson",
            "fullName": "Lockie Ferguson",
            "nickName": "Ferguson",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast",
            "teamName": "RCB",
            "faceImageId": 351814
          },
          {
            "id": 12258,
            "name": "Will Jacks",
            "fullName": "Will Jacks",
            "nickName": "Will Jacks",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "RCB",
            "faceImageId": 182026
          },
          {
            "id": 13962,
            "name": "Manoj Bhandage",
            "fullName": "Manoj Bhandage",
            "nickName": "Bhandage",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 182026
          },
          {
            "id": 21686,
            "name": "Saurav Chauhan",
            "fullName": "Saurav Chauhan",
            "nickName": "Saurav Chauhan",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "RCB",
            "faceImageId": 182026
          },
          {
            "id": 32786,
            "name": "Rajan Kumar",
            "fullName": "Rajan Kumar",
            "nickName": "Rajan Kumar",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left Arm fast medium",
            "teamName": "RCB",
            "faceImageId": 182026
          },
          {
            "id": 36482,
            "name": "Himanshu Sharma",
            "fullName": "Himanshu Sharma",
            "nickName": "Himanshu Sharma",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 59,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "RCB",
            "faceImageId": 182026
          },
          {
            "id": 3406,
            "name": "Andy Flower",
            "fullName": "Andy Flower",
            "nickName": "Flower",
            "role": "Head Coach",
            "teamId": 59,
            "teamName": "RCB",
            "faceImageId": 153350,
            "isSupportStaff": true
          },
          {
            "id": 3942,
            "name": "Sridharan Sriram",
            "fullName": "Sridharan Sriram",
            "nickName": "Sriram",
            "role": "Batting Coach",
            "teamId": 59,
            "teamName": "RCB",
            "faceImageId": 182026,
            "isSupportStaff": true
          },
          {
            "id": 42663,
            "name": "Adam Griffith",
            "fullName": "Adam Griffith",
            "nickName": "Adam Griffith",
            "role": "Bowling Coach",
            "teamId": 59,
            "teamName": "RCB",
            "faceImageId": 182026,
            "isSupportStaff": true
          },
          {
            "id": 8899,
            "name": "Malolan Rangarajan",
            "fullName": "Malolan Rangarajan",
            "nickName": "Malolan Rangarajan",
            "role": "Head of Scouting and Fielding Coach",
            "teamId": 59,
            "teamName": "RCB",
            "faceImageId": 182026,
            "isSupportStaff": true
          }
        ],
        "shortName": "RCB"
      },
      "series": {
        "id": 7607,
        "name": "Indian Premier League 2024",
        "seriesType": "IPL",
        "startDate": 1710979200000,
        "endDate": 1716768000000,
        "seriesFolder": "",
        "odiSeriesResult": "",
        "t20SeriesResult": "",
        "testSeriesResult": "",
        "tournament": true
      },
      "umpire1": {
        "id": 9680,
        "name": "Saiyed Khalid",
        "country": "IND"
      },
      "umpire2": {
        "id": 8909,
        "name": "Virender Sharma",
        "country": "IND"
      },
      "umpire3": {
        "id": 8862,
        "name": "Nitin Menon",
        "country": "IND"
      },
      "referee": {
        "id": 3894,
        "name": "Javagal Srinath",
        "country": "IND"
      },
      "tossResults": {
        "tossWinnerId": 59,
        "tossWinnerName": "Royal Challengers Bengaluru",
        "decision": "Batting"
      },
      "result": {
        "resultType": "win",
        "winningTeam": "Chennai Super Kings",
        "winningteamId": 58,
        "winningMargin": 6,
        "winByRuns": false,
        "winByInnings": false
      },
      "venue": {
        "id": 11,
        "name": "MA Chidambaram Stadium",
        "city": "Chennai",
        "country": "India",
        "timezone": "+05:30",
        "latitude": "13.06282",
        "longitude": "80.279274"
      },
      "status": "Royal Challengers Bengaluru opt to bat",
      "playersOfTheMatch": [
        {
          "id": 9863,
          "name": "Mustafizur",
          "fullName": "Mustafizur Rahman",
          "nickName": "Mustafizur",
          "captain": false,
          "keeper": false,
          "substitute": false,
          "teamName": "Bangladesh",
          "faceImageId": 351909
        }
      ],
      "playersOfTheSeries": [],
      "revisedTarget": {
        "reason": ""
      },
      "matchTeamInfo": [
        {
          "battingTeamId": 59,
          "battingTeamShortName": "RCB",
          "bowlingTeamId": 58,
          "bowlingTeamShortName": "CSK"
        },
        {
          "battingTeamId": 58,
          "battingTeamShortName": "CSK",
          "bowlingTeamId": 59,
          "bowlingTeamShortName": "RCB"
        }
      ],
      "isMatchNotCovered": false,
      "HYSEnabled": 1,
      "livestreamEnabled": false,
      "isFantasyEnabled": true,
      "livestreamEnabledGeo": [
        "MA",
        "KW",
        "EG",
        "TN",
        "JO",
        "MR",
        "US",
        "BH",
        "SD",
        "LY",
        "IQ",
        "SA",
        "MU",
        "AE",
        "LB",
        "DJ",
        "SO",
        "SS",
        "YT",
        "MG",
        "YE",
        "RE",
        "OM",
        "DZ",
        "QA",
        "CA",
        "TD",
        "PS"
      ],
      "alertType": "auto",
      "shortStatus": "CSK won",
      "matchImageId": 386851
    },
    "venueInfo": {
      "established": 0,
      "capacity": "50000",
      "knownAs": "Chepauk; Madras Cricket Club Ground",
      "ends": "Anna Pavilion End, V Pattabhiraman Gate End",
      "city": "Chennai",
      "country": "India",
      "timezone": "+05:30",
      "homeTeam": "Tamil Nadu, Chennai Super Kings",
      "floodlights": true,
      "curator": null,
      "profile": "<b>Venue Description</b>: \n\nThe stadium is named after the former President of BCCI and Tamil Nadu Cricket Association, MA Chidambaram. It was formerly known as Madras Cricket Club Ground. The ground was established in 1916, making it the oldest venue in India which is in continuous use. The stadium is more commonly known as Chepauk - the locality in which it is situated.\n\nSince 2008, the venue is home to Chennai Super Kings in the Indian Premier League. It hosted its first ever international game in 1934, a Test match between India and England, which the visitors won by 202 runs. The stadium has gone through several changes since then. The most notable ones being, the addition of floodlights in 1996 and the reconstruction in 2009 to accommodate more people and give state-of-art facility.\n\nThe most fascinating thing about the ground is the crowd support. It is common knowledge that the Chepauk crowd is the most unbiased and the most knowledgeable crowd in the country. Saeed Anwar got a standing ovation when he made a record-breaking 194. When Pakistan won the 1999 Test, the team received good appreciation from the crowd. As mark of respect, the Pakistani team also took a lap of honour around the ground.\n\n<b>How does the pitch play</b>? \n\nWhen the pitches were uncovered and unattended to, it used to help the fast bowlers. However, since India started playing the spin quartet of Bishan Singh Bedi, BS Chandrasekar, S Venkatraghavan and EAS Prasanna, the wickets were made spin-friendly. Taking a look at the stats gives you a clear indication as to what type of bowlers hold the aces on the Chepauk wicket. \n\nAmong the top 10 wicket-takers at the ground, nine of them are spinners and the only fast bowler on the list is Kapil Dev. Anil Kumble sits on top of the list with 48 wickets, followed closely by Harbhajan Singh - 42 wickets.\n\n<b>Interesting facts about Chepauk</b>:\n\nThe first ever Ranji Trophy game was played at this venue. Madras' AG Ram Singh ran through Mysore with a 11-wicket haul in the match.\n\nFor a long time, Chepauk hosted the famous Pongal (Harvest) Test. It used to be played in the month of January.  \n\nIndia registered their first ever Test win at this stadium, when they beat England by an innings and 8 runs.\n\nThe second tied Test in the history of cricket was played here, between India and Australia in 1986.\n\nSaeed Anwar recorded the highest individual score in ODIs - 194 - at this ground. The milestone remained for more than a decade, before Sachin Tendulkar scored 200 against South Africa.\n\nSunil Gavaskar went past Don Bradman's 29 Test hundreds at this very venue. \n\nThis ground was also witness to one of Sachin Tendulkar's greatest Test innings. The Indian maestro battled back spasms and almost took his side home against Pakistan in 1999. But his 136 went in vain as the arch-rivals sealed a 12-run victory.",
      "imageUrl": "http://i.cricketcb.com/i/stats/fth/540x303/venue/images/11.jpg",
      "ground": "MA Chidambaram Stadium",
      "groundLength": 0,
      "groundWidth": 0,
      "otherSports": null
    },
    "broadcastInfo": [
      {
        "country": "IN",
        "broadcaster": [
          {
            "broadcastType": "Streaming",
            "value": "Jio Cinema"
          },
          {
            "broadcastType": "TV",
            "value": "Star Sports Network"
          }
        ]
      }
    ]
  }

  const [data, setData] = useState([])

  async function fetchMathcDetail() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c3d72ebbe7mshe9938d3cfdc7ba3p18dc3ajsn8a5141f7f8c1',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // fetchMathcDetail()
  }, [])
  return (
    <div>
      {
        fixedData.length <= 0 ?  (<h1>Loading..</h1>) : ( <InPageNavigation teams={[fixedData.matchInfo.team1.shortName, fixedData.matchInfo.team2.shortName]}>
          {
            fixedData.matchInfo.team1.playerDetails.map((data,i) =>
              (<div key={i}>
                <h1>{data.fullName}</h1>
                <h2>{data.role}</h2>
              </div>)
            )
          }
          {
            fixedData.matchInfo.team2.playerDetails.map((data,i) =>
              (<div key={i}>
                <h1>{data.fullName}</h1>
                <h2>{data.role}</h2>
              </div>)
            )
          }
        </InPageNavigation>

        )
      }
      
    </div>
  )
}

export default MatchDetail;