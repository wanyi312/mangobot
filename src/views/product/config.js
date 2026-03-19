import A2BgImg from './assets/A2-bg.jpg';
import X2BgImg from './assets/X2-bg.jpg';
import D1BgImg from './assets/D1-bg.jpg';
import D1MaxBgImg from './assets/D1-max-bg.jpg';
import D1ProMaxBgImg from './assets/D1-proMax-bg.jpg';
import G1BgImg from './assets/G1-bg.jpg';


import A2Img from './assets/a2-view.jpg';
import X2Img from './assets/x2-view.jpg';
import D1Img from './assets/D1-view.jpg';
import D1MaxImg from './assets/d1-pro-view.png';
import D1ProMaxImg from './assets/d1promax-view.jpg';
import G1Img from './assets/G1-view.jpg';

import A2Img1 from './assets/A2-bg-1.jpg';
import A2Img2 from './assets/A2-bg-2.jpg';
import A2Img3 from './assets/A2-bg-3.jpg';

import X2Img1 from './assets/X2-bg-1.jpg';
import X2Img2 from './assets/X2-bg-2.jpg';
import X2Img3 from './assets/X2-bg-3.jpg';


import D1Img1 from './assets/D1-bg-1.jpg';
import D1Img2 from './assets/D1-bg-2.jpg';
import D1Img3 from './assets/D1-bg-3.jpg';


import D1MaxImg1 from './assets/d1Max-bg-1.jpg';

import D1ProMaxImg1 from './assets/d1promax-bg-1.jpg';
import D1ProMaxImg2 from './assets/d1promax-bg-2.jpg';
import D1ProMaxImg3 from './assets/d1promax-bg-3.jpg';


import G1Img1 from './assets/g1-bg-1.jpg';
import G1Img2 from './assets/g1-bg-2.jpg';
import G1Img3 from './assets/g1-bg-3.jpg';

/**
 * ideal
 */
import D1IdealImg5 from './assets/svg/helicopter.svg';
import D1IdealImg4 from './assets/svg/real-estate-01.svg';
import D1IdealImg3 from './assets/svg/corporate.svg';
import D1IdealImg2 from './assets/svg/factory-02.svg';
import D1IdealImg1 from './assets/svg/house-02.svg';


import X2IdealImg2 from './assets/svg/famicons_school-outline.svg';
import X2IdealImg1 from './assets/svg/mage_gem-stone.svg';
import X2IdealImg3 from './assets/svg/crown.svg';
import X2IdealImg4 from './assets/svg/store-01.svg';

import A2IdealImg1 from './assets/svg/healt.svg';
import A2IdealImg2 from './assets/svg/real-estate-02.svg';

import D1MaxIdealImg1 from './assets/svg/bubble-chat-search.svg';
import D1MaxIdealImg2 from './assets/svg/delivery-truck-02.svg';
import D1MaxAttrsImg3 from './assets/svg/energy-ellipse.svg';
import D1MaxAttrsImg4 from './assets/svg/security-lock.svg';

import D1ProMaxIdealImg1 from './assets/svg/fire.svg';
import D1ProMaxIdealImg2 from './assets/svg/recycle-02.svg';

import G1IdealImg1 from './assets/svg/artificial-intelligence-04.svg';

/**
 * attrs
 */
import A2AttrsImg from './assets/attrs-a2-bg.png';
import X2AttrsImg from './assets/attrs-x2-bg.png';
import D1AttrsImg from './assets/attrs-d1-bg.png';
import D1MaxAttrsImg from './assets/attrs-d1max-bg.png';
import D1ProMaxAttrsImg from './assets/attrs-d1promax-bg.png';
import G1AttrsImg from './assets/attrs-g1-bg.png';


/**
 * capabilities
 */
import A2captop from './assets/a2-top.png';
import A2capbottom from './assets/a2-bot.png';
import X2captop from './assets/x2-top.png';
import X2capbottom from './assets/x2-bot.png';
import D1captop from './assets/d1-top.jpg';
import D1capbottom from './assets/d1-bot.jpg';
import D1Maxcaptop from './assets/max-top.jpg';
import D1Maxcapbottom from './assets/max-bot.jpg';
import D1ProMaxcaptop from './assets/pro-top.png';
import D1ProMaxcapbottom from './assets/pro-bot.png';
import G1captop from './assets/g1-top.png';
import G1capbottom from './assets/g1-bot.png';

export default {
    productHeader: {
        A2: {
            title: ["A2", "Ultra"],
            desc: "The Ambassador",
            descText:
                "Standing 169cm tall, the A2 Ultra is Mangobot's flagship humanoid, designed to elevate human interaction through natural conversation, fluid movement, and intelligent navigation. With 20+ languages, autonomous 360°\n perception, and ultra-realistic speech.",
            buttonText: "Request a Quote",
            buttons: ["Order Now", "View Specs →"],
            bgImgUrl: A2BgImg,
            className: 'a2',
        },
        X2: {
            title: ["X2", "Ultra"],
            desc: "the vibe master",
            descText:
                "Standing 130cm tall,  Mangobot’s X2 Ulta is an expressive humanoid built for performance-driven environments, combining lifelike movement, intelligent interaction, and embodied AI.",
            bgImgUrl: X2BgImg,
            className: 'x2',
        },
        D1: {
            title: ["D1", "Ultra"],
            desc: "The Explorer",
            descText:
                "Weighing just 15kg, the D1 Ultra moves at 3.7 m/s, climbs\n stairs, and adapts to complex terrain using reinforcement\n learning. Built for patrol, inspection, and multi-scenario\n operations",
            bgImgUrl: D1BgImg,
            className: 'd1',
        },
        D1MAX: {
            title: ["D1", "Max"],
            desc: "Hybrid Quadruped Robot",
            descText:
                "The D1 Max brings near 1:1 load-to-weight performance, carrying up to 30kg at 4+ m/s on legs and 8+ m/s on wheels. IP67 rated and built for extremes.",
            buttonText: "Request a Quote",
            buttons: ["Order Now", "View Specs →"],
            bgImgUrl: D1MaxBgImg,
            className: 'd1max',
        },
        D1PROMAX: {
            title: ["D1", "Pro Max"],
            desc: "Intelligent Quadruped Robot",
            descText:
                "The D1 Max Pro is a next-generation quadruped built for serious payloads, extreme terrain, and mission-critical\n industrial operations, carrying up to 100kg and running for 5.5\n hours in any condition.",
            bgImgUrl: D1ProMaxBgImg,
            className: 'd1promax',
        },
        G1: {
            title: ["G1", "Ultra"],
            desc: "The Precision Specialist",
            descText:
                "The G1 Ultra is a precision-driven humanoid equipped with\n six-axis force sensors, eight high-res cameras, and a Jetson\n AGX Orin brain, built for industrial, commercial, and scientific\n environments that demand exceptional accuracy.",
            bgImgUrl: G1BgImg,
            className: 'g1',
        }
    },
    productView: {
        A2: {
            title: 'A2',
            title1: 'Ultra',
            desc: "The Ambassador",
            imgUrl: A2Img,
            className: 'a2',
        },
        X2: {
            title: 'X2',
            title1: 'Ultra',
            desc: "The Vibe Master",
            imgUrl: X2Img,
            className: 'x2',
        },
        D1: {
            title: 'D1',
            title1: 'Ultra',
            desc: "The Explorer",
            imgUrl: D1Img,
            className: 'd1',
        },
        D1MAX: {
            title: 'D1',
            title1: 'Max',
            desc: "Intelligent Hybrid Quadruped Robot",
            imgUrl: D1MaxImg,
            className: 'd1max',
        },
        D1PROMAX: {
            title: 'D1',
            title1: 'Pro Max',
            imgUrl: D1ProMaxImg,
            className: 'd1promax',
        },
        G1: {
            title: 'G1',
            title1: 'Ultra',
            desc: "The Precision Specialist",
            imgUrl: G1Img,
            className: 'g1',
        }
    },
    bgImgs: {
        A2: {
            imgs: [
                {
                    url: A2Img1,
                    className: 'a2Img1',
                },
                {
                    url: A2Img2,
                    className: 'a2Img2',
                },
                {
                    url: A2Img3,
                    className: 'a2Img3',
                },
            ]
        },
        X2: {
            imgs: [
                {
                    url: X2Img1,
                    className: 'x2Img1',
                },
                {
                    url: X2Img2,
                    className: 'x2Img2',
                },
                {
                    url: X2Img3,
                    className: 'x2Img3',
                },
            ]
        },
        D1: {
            imgs: [
                {
                    url: D1Img1,
                    className: 'd1Img1',
                },
                {
                    url: D1Img2,
                    className: 'd1Img2',
                },
                {
                    url: D1Img3,
                    className: 'd1Img3',
                },
            ]
        },
        D1MAX: {
            imgs: [
                {
                    url: D1MaxImg1,
                    className: 'd1MaxImg1',
                },
            ]
        },
        D1PROMAX: {
            imgs: [
                {
                    url: D1ProMaxImg1,
                    className: 'd1ProMaxImg1',
                },
                {
                    url: D1ProMaxImg2,
                    className: 'd1ProMaxImg2',
                },
                {
                    url: D1ProMaxImg3,
                    className: 'd1ProMaxImg3',
                },
            ]
        },
        G1: {
            imgs: [
                {
                    url: G1Img1,
                    className: 'g1Img1',
                },
                {
                    url: G1Img2,
                    className: 'g1Img2',
                },
                {
                    url: G1Img3,
                    className: 'g1Img3',
                },
            ]
        },
    },
    ideal: {
        A2: [
            {
                imgUrl: A2IdealImg2,
                title: 'Hotels & Resorts',
                desc: 'Front desk support, autonomous guided tours, multilingual concierge',
            },
            {
                imgUrl: X2IdealImg4,
                title: 'Luxury Retail',
                desc: 'Brand ambassadors, product information, elevated customer experience',
            },
            {
                imgUrl: D1IdealImg3,
                title: 'Corporate Headquarters',
                desc: 'Reception, self-mapped facility tours, multi language visitor navigation',
            },
            {
                imgUrl: X2IdealImg3,
                title: 'Exclusive Events',
                desc: 'Guest check-in, MC & co-host, live performance, VIP assistance'
            },
            {
                imgUrl: A2IdealImg1,
                title: 'Healthcare Facilities',
                desc: 'Patient navigation, visitor guidance, administrative support',
            }
        ],
        D1: [
            {
                imgUrl: D1IdealImg1,
                title: 'Warehouses &\n Distribution',
                desc: 'After-hours patrol, inventory protection,\n perimeter security',
            },
            {
                imgUrl: D1IdealImg2,
                title: 'Industrial\nFacilities',
                desc: 'Safety monitoring, hazardous area\n inspection, compliance verification',
            },
            {
                imgUrl: D1IdealImg3,
                title: 'Corporate Campuses',
                desc: 'Grounds patrol, parking security, building perimeter',
            },
            {
                imgUrl: D1IdealImg4,
                title: 'Critical Infrastructure',
                desc: 'Power facilities, data centers, sensitive\n installations'
            },
            {
                imgUrl: D1IdealImg5,
                title: 'Government & Military',
                desc: 'Base security, facility monitoring, checkpoint support',
            }
        ],
        X2: [
            {
                imgUrl: D1IdealImg3,
                title: 'Events & Flashmobs',
                desc: 'Choreographed fleet performances and synchronized routines that stop crowds and generate organic social moments.',
            },
            {
                imgUrl: X2IdealImg4,
                title: 'Brand \nAmbassador',
                desc: 'From co-hosting to DJ to stand-up, the X2 Ultra takes any stage role with a fully customizable persona and voice',
            },
            {
                imgUrl: X2IdealImg2,
                title: 'Education & Engagement',
                desc: 'Interactive humanoid demonstrations for schools and universities, making them tangible for every audience',
            },
            {
                imgUrl: X2IdealImg3,
                title: 'Exclusive Events',
                desc: 'Conferences, activations, and VIP experiences elevated by humanoid interaction that leaves an impact'
            },
            {
                imgUrl: X2IdealImg1,
                title: 'Luxury & Hospitality',
                desc: 'Hotel lobbies to launches, X2 delivers personalized guest experiences that define the standard for modern luxury',
            }
        ],
        D1MAX: [
            {
                imgUrl: D1MaxAttrsImg4,
                title: 'Security Built for Surveillance',
                desc: 'Autonomous monitoring of industrial zones, campuses & restricted areas',
            },
            {
                imgUrl: D1MaxAttrsImg3,
                title: 'Power & Infrastructure',
                desc: 'Inspects complex facilities and rough terrain without human risk',
            },
            {
                imgUrl: D1MaxIdealImg2,
                title: 'Logistics & On Site Transport',
                desc: "Moves tools and payloads across environments where vehicles can't",
            },
            {
                imgUrl: D1MaxIdealImg1,
                title: 'Rescue Mission Support',
                desc: 'Built for high-risk conditions, reliable when response teams need it most'
            },
            {
                imgUrl: A2IdealImg1,
                title: 'Healthcare Facilities',
                desc: 'Patient navigation, visitor guidance, administrative support',
            }
        ],
        D1PROMAX: [
            {
                imgUrl: D1IdealImg2,
                title: 'Industrial & Plant Inspections',
                desc: 'Safely navigates complex facilities to support inspections in energy, chemical, and heavy industrial sites',
            },
            {
                imgUrl: D1MaxIdealImg2,
                title: 'Heavy-Duty Transport',
                desc: 'Handles cargo and equipment movement across challenging terrain where traditional vehicles fall short',
            },
            {
                imgUrl: D1ProMaxIdealImg1,
                title: 'Emergency & Rescue',
                desc: 'Deploys quickly in high-risk environments, supporting rescue teams when conditions are unstable or unsafe',
            },
            {
                imgUrl: D1ProMaxIdealImg2,
                title: 'Patrol & Surveillance',
                desc: 'Provides continuous, intelligent patrol in large outdoor or industrial areas with minimal human intervention'
            }
        ],
        G1: [
            {
                imgUrl: D1IdealImg2,
                title: 'Industrial & Smart Factories',
                desc: 'Precision navigation and task handling in energy, chemical, and industrial facilities',
            },
            {
                imgUrl: G1IdealImg1,
                title: 'Research & AI Development',
                desc: 'Open interfaces for secondary development and cutting-edge AI & robotics research',
            },
            {
                imgUrl: A2IdealImg2,
                title: 'Corporate & Commercial',
                desc: 'Exhibitions, activation, and high-precision commercial operations',
            },
            {
                imgUrl: X2IdealImg3,
                title: 'Exclusive Events',
                desc: 'Guest check-in, information services, VIP assistance'
            }
        ]
    },
    attrs: {
        A2: {
            title: "A2 Ultra.",
            title1: "By the numbers.",
            desc: "Engineered for real-world deployment. Built to perform in the most demanding environments, globally.",
            imgUrl: A2AttrsImg,
            className: 'a2Img1',
            children: [
                [
                    {
                        label: 'Physical',
                        children: [
                            { label: 'Height', value: '169 cm' },
                            { label: 'Weight', value: '69 kg' },
                            { label: 'Degrees of Freedom', value: '40+' },
                            { label: 'IP Rating', value: 'IP54' }
                        ]
                    },
                    {
                        label: 'Performance',
                        children: [
                            { label: 'RGB-D camera', value: 'Equipped' },
                            { label: '3D LiDAR', value: 'Equipped' },
                            { label: 'Fisheye camera', value: 'Equipped' },
                            { label: 'Peak knee torque', value: '270 N·m' },
                            { label: 'Speed', value: 'Max 0.8 m/s (typical <0.6 m/s)' }
                        ]
                    },
                    {
                        label: 'Power and Energy',
                        children: [
                            { label: 'Battery capacity', value: '14.4 Ah' },
                            { label: 'Standing battery life', value: '~3 h' },
                            { label: 'Walking battery life', value: '~1.5 h' },
                            { label: 'Charging time', value: '~1.5 h' },
                            { label: 'Voltage', value: '110–220 V' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Interaction Modules',
                        children: [
                            { label: 'Facial expression screen', value: 'Yes' },
                            { label: 'Interaction screen', value: 'Yes' },
                            { label: 'Microphone array', value: 'Yes' },
                            { label: 'Speaker', value: 'Yes' },
                            { label: 'Indicator light', value: 'Yes' },
                            { label: 'Languages', value: '20+ with LLM' }
                        ]
                    },
                    {
                        label: 'Intelligence',
                        children: [
                            { label: 'CPU', value: '16-core high-performance' },
                            { label: 'AI board', value: 'NVIDIA Jetson Orin (275 TOPS)' }
                        ]
                    },
                    {
                        label: 'Other',
                        children: [
                            { label: 'Dance development', value: 'Supported' },
                            { label: 'OTA upgrade', value: 'Supported' },
                            { label: 'Control', value: 'Remote - Smartphone - Computer' },
                            { label: 'In Box', value: 'Robot, Charger, Mic, Battery, Remote, Transfer Device' },
                            { label: 'Perception', value: '360° total with zero blind spots' },
                            { label: 'WiFi', value: 'Supported' }
                        ]
                    }
                ]
            ]
        },
        X2: {
            title: "X2 Ultra.",
            title1: "By the numbers.",
            desc: "Engineered for real-world deployment. Built to perform in the most demanding environments, globally.",
            imgUrl: X2AttrsImg,
            className: 'x2Img1',
            children: [
                [
                    {
                        label: 'Physical',
                        children: [
                            { label: 'Height', value: '130 cm' },
                            { label: 'Weight', value: '39 kg' },
                            { label: 'Degrees of Freedom', value: '30' },
                            { label: 'Max load', value: '3 kg' }
                        ]
                    },
                    {
                        label: 'Performance',
                        children: [
                            { label: 'RGB-D camera', value: 'Equipped' },
                            { label: '3D LiDAR', value: 'Equipped' },
                            { label: 'Excluding and Effector', value: '10C to 40C degrees' },
                            { label: 'Peak knee torque', value: '120 N·m' },
                            { label: 'Walking Speed', value: 'Up to 1.8 m/s - typical: <0.8 m/s' }
                        ]
                    },
                    {
                        label: 'Power and Energy',
                        children: [
                            { label: 'Battery capacity', value: '500 Wh' },
                            { label: 'Standing battery life', value: '~2 h' },
                            { label: 'Power supply method', value: 'Direct charging - swappable battery' },
                            { label: 'Charging time', value: '~1.5 h' },
                            { label: 'Voltage', value: '110–220 V' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Interaction Modules',
                        children: [
                            { label: 'Facial expression screen', value: 'Yes' },
                            { label: 'Interaction screen', value: 'Yes' },
                            { label: 'Microphone array', value: 'Yes' },
                            { label: 'Speaker', value: 'Yes' },
                            { label: 'Indicator light', value: 'Yes' },
                            { label: 'Audio I/O', value: 'Wireless microphone, speaker' }
                        ]
                    },
                    {
                        label: 'Intelligence',
                        children: [
                            { label: 'Main compute board', value: 'RK3588 x2' },
                            { label: 'High performance board', value: 'Orin NX (157 TOPS)' }
                        ]
                    },
                    {
                        label: 'Other',
                        children: [
                            { label: 'Dance development', value: 'Supported' },
                            { label: 'OTA upgrade', value: 'Supported' },
                            { label: 'Control', value: 'Remote - Smartphone - Computer' },
                            { label: 'In Box', value: 'Robot, Charger, Mic, Battery, Remote, Transfer Device' },
                            { label: 'Mobile App', value: 'Supported' },
                            { label: 'Method', value: 'Wi-Fi, Bluetooth, 4G/5G module' }
                        ]
                    }
                ]
            ]
        },
        D1: {
            title: "D1 Ultra.",
            title1: "By the numbers.",
            desc: "Engineered for real-world deployment. Built to perform in the most demanding environments, globally.",
            imgUrl: D1AttrsImg,
            className: 'd1Img1',
            children: [
                [
                    {
                        label: 'Physical',
                        children: [
                            { label: 'Dimensions', value: '630 × 360 × 415 mm' },
                            { label: 'Weight', value: '15 kg' },
                            { label: 'Battery', value: '5 Ah' },
                            { label: 'Endurance', value: '1–2 hours' },
                            { label: 'Ports', value: 'Ethernet, USB, Power, SBUS, UART' }
                        ]
                    },
                    {
                        label: 'Performance',
                        children: [
                            { label: 'Payload (Cont.)', value: '5 kg' },
                            { label: 'Payload (Max)', value: '10 kg' },
                            { label: 'Stair Climb', value: '>16 cm' },
                            { label: 'Climbing Angle', value: '30° (extreme 40°)' }
                        ]
                    },
                    {
                        label: 'Intelligence',
                        children: [
                            { label: 'Max Speed', value: '3.7 m/s' },
                            { label: 'Jump Height', value: 'Up to 35 cm' },
                            { label: 'Peak Torque', value: 'IP54' },
                            { label: 'IP Rating', value: 'Edge, <50ms latency' }
                        ]
                    }
                ]
            ]
        },
        D1MAX: {
            title: "D1 Max.",
            title1: "By the numbers.",
            desc: "Engineered for real-world deployment. Built to perform in the most demanding environments, globally.",
            imgUrl: D1MaxAttrsImg,
            className: 'd1MaxImg1',
            children: [
                [{
                    label: 'Physical',
                    children: [
                        { label: 'Standing Dimensions (L × W × H)', value: '~80 × 50 × 60 cm' },
                        { label: 'Folded Dimensions', value: '89 × 50 × 26 cm' },
                        { label: 'Weight', value: '30 kg' },
                        { label: 'Legged Walking Speed', value: '>4 m/s' },
                        { label: 'Wheeled Speed', value: '>8 m/s' }
                    ]
                },
                {
                    label: 'Performance',
                    children: [
                        { label: 'Battery Capacity', value: '20 Ah' },
                        { label: 'Endurance with Load', value: '25 kg - 2.5 hrs' },
                        { label: 'Operating Temperature', value: '-20 °C to 55 °C' },
                        { label: 'Protection Rating', value: 'IP67' },
                        { label: 'Obstacle Crossing Height', value: '80 cm' },
                        { label: 'Slope Climbing Ability', value: '45°' }
                    ]
                },
                {
                    label: 'Intelligence',
                    children: [
                        { label: 'External Expansion Ports', value: 'Gigabit Ethernet, USB, Serial Port' },
                        { label: 'Power Interfaces', value: '5V / 12V / 24V / 48V' },
                        { label: 'Max Power Output', value: '480 W' }
                    ]
                }]
            ]
        },
        D1PROMAX: {
            title: "D1 Pro Max.",
            title1: "By the numbers.",
            desc: "Engineered for real-world deployment. Built to perform in the most demanding environments, globally.",
            imgUrl: D1ProMaxAttrsImg,
            className: 'd1ProMaxImg1',
            children: [
                [{
                    label: 'Physical',
                    children: [
                        { label: 'Standing Dimensions', value: '123 × 53 × 73 cm' },
                        { label: 'Weight', value: '64 kg' },
                        { label: 'Max Speed & Load', value: '3.5 m/s - 100 kg' }
                    ]
                },
                {
                    label: 'Performance',
                    children: [
                        { label: 'Battery Capacity', value: '2160 Wh' },
                        { label: 'Max Climbing Angle', value: '45°' },
                        { label: 'Max Continuous Stair Climbing Height', value: '30 cm' },
                        { label: 'Endurance', value: '2.5 to 5.5 hrs' },
                        { label: 'Operating Temperature', value: '-20°C to 55°C' }
                    ]
                },
                {
                    label: 'Intelligence',
                    children: [
                        { label: 'Sensors', value: 'Integrated LiDAR' },
                        { label: 'External Expansion Ports', value: 'Gigabit Ethernet, USB' },
                        { label: 'IP Rating', value: 'IP67' },
                        { label: 'Power Interfaces', value: '12V / 24V / 48V / 720W' }
                    ]
                }]
            ]
        },
        G1: {
            title: "G1 Ultra.",
            title1: "By the numbers.",
            desc: "Engineered for real-world deployment. Built to perform in the most demanding environments, globally.",
            imgUrl: G1AttrsImg,
            className: 'g1Img1',
            children: [
                [{
                    label: 'Physical',
                    children: [
                        { label: 'Height', value: '130 - 180 cm' },
                        { label: 'Weight', value: '150 kg' },
                        { label: 'Span', value: '70 cm' },
                        { label: 'DOF', value: '20' }
                    ]
                },
                {
                    label: 'Performance',
                    children: [
                        { label: 'Maximum Single-Arm Load', value: '5 kg' },
                        { label: 'Force Sensing', value: 'Six-axis force sensor' },
                        { label: 'Cameras', value: '3× RGB-D + 5× fisheye' },
                        { label: 'Runtime', value: '4+ hrs' },
                        { label: 'Sensing Coverage', value: '360 degrees' },
                        { label: 'Battery Capacity', value: '48V 15Ah' }
                    ]
                },
                {
                    label: 'Intelligence',
                    children: [
                        { label: 'Computing Platform', value: 'Jetson AGX Orin (64 GB)' },
                        { label: 'Connectivity', value: 'Wired' }
                    ]
                }]
            ]
        }
    },
    capabilities: {
        A2: {
            topImgUrl: A2captop,
            bottomImgUrl: A2capbottom,
            className: 'a2Capabilities1',
            children: [
                {
                    label: 'Performance & Expression',
                    children: [
                        'Fluid dance routines',
                        'Vocal capabilities',
                        'Ultra-realistic speech synthesis'
                    ]
                },
                {
                    label: 'Multilingual Communication',
                    children: [
                        'Fluent conversationalist in 20+ multiple languages'
                    ]
                },
                {
                    label: 'Autonomous Intelligence',
                    children: [
                        'Self-mapping & navigation',
                        '360° obstacle avoidance with zero blind spots'
                    ]
                }
            ]
        },
        X2: {
            topImgUrl: X2captop,
            bottomImgUrl: X2capbottom,
            className: 'x2Capabilities1',
            children: [
                {
                    label: 'Choreography & Performance',
                    children: [
                        'Fluid dance routines & custom choreography',
                        'Contemporary & traditional movement styles',
                        'Ultra-realistic speech synthesis & vocal capabilities'
                    ]
                },
                {
                    label: 'Audience Interaction',
                    children: [
                        'Real-time guest recognition & personalized\ninteraction'
                    ]
                },
                {
                    label: 'Multi-Robot Synchronization',
                    children: [
                        'Deploy multiple X2 Ultra units in perfectly choreographed fleet performances.',
                        'Fully customizable to your brand: colors, messaging, and movement,\nall in sync.'
                    ]
                }
            ]
        },
        D1: {
            topImgUrl: D1captop,
            bottomImgUrl: D1capbottom,
            className: 'd1Capabilities1',
            children: [
                {
                    label: 'Autonomous Patrol',
                    children: [
                        'Real-time intelligent decision-making',
                        'Pre-programmed routes',
                        'Self-stabilizing across stairs, rubble & complex terrain'
                    ]
                },
                {
                    label: 'High-Power Drive',
                    children: [
                        'AI-powered analysis reduces false alarms while\nmaintaining vigilance.'
                    ]
                },
                {
                    label: 'Open & Expandable',
                    children: [
                        'Modular, open, and built to integrate with anything',
                        'Fully configurable for any environment or mission'
                    ]
                }
            ]
        },
        D1MAX : {
            topImgUrl: D1Maxcaptop,
            bottomImgUrl: D1Maxcapbottom,
            className: 'd1MaxCapabilities1',
            children: [
                {
                    label: 'Smart Adaptive Movement',
                    children: [
                        'Continuously adjusts its posture and motion to handle impacts,\nrecover from falls, and adapt smoothly to changing ground conditions.',
                        '30kg payload capacity — 50% more than comparable robots, without compromising balance.'
                    ]
                },
                {
                    label: 'Hybrid Terrain Mobility',
                    children: [
                        "Legs and wheels in one, crosses obstacles,\nclimbs steep slopes, goes where vehicles can't."
                    ]
                },
                {
                    label: 'Continuous Operation',
                    children: [
                        "Hot-swappable batteries & autonomous charging,\n20Ah for uninterrupted, extended missions."
                    ]
                }
            ],
        },
        D1PROMAX : {
            topImgUrl: D1ProMaxcaptop,
            bottomImgUrl: D1ProMaxcapbottom,
            className: 'd1ProMaxCapabilities1',
            children: [
                {
                    label: 'Heavy Payload, Stable Control',
                    children: [
                        '50kg continuous load, 100kg maximum payload',
                        'Stable equipment mounting & cargo transport',
                        'Balanced and controlled across all terrain types'
                    ]
                },
                {
                    label: 'Extreme Endurance',
                    children: [
                        '2160 Wh battery, 5.5 hours of unloaded runtime',
                        'Hot-swappable with optional autonomous charging for multi-shift deployments'
                    ]
                },
                {
                    label: 'Industrial-Grade Resilience',
                    children: [
                        'Industrial-grade protection, reliable in dust, rain,\nheat, cold, and harsh outdoor conditions.'
                    ]
                }
            ],
        },
        G1: {
            topImgUrl: G1captop,
            bottomImgUrl: G1capbottom,
            className: 'g1Capabilities1',
            children: [
                {
                    label: 'Multidimensional Perception',
                    children: [
                        'Eight high-resolution cameras for full 3D upper-body perception',
                        'Six-axis force sensors on both arms',
                        'Precise control for delicate and complex operations'
                    ]
                },
                {
                    label: 'Extreme Endurance',
                    children: [
                        'Millisecond-latency VR & motion capture\nrecords full-body joint data with cloud validation\nfor continuous learning.'
                    ]
                },
                {
                    label: 'Multi-Scenario Operations',
                    children: [
                        'Operates at heights over 2m, navigating 95% of\nfactory pathways',
                        '26 DOF with obstacle handling up to 20mm for\nmaximum versatility'
                    ]
                }
            ]
        }
    }
};