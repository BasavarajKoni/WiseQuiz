wiseQuiz.factory("DataService", DataService);

		function DataService(){
			var dataObj ={
				turtlesData: turtlesData,
				quizQuestions: quizQuestions,
				correctAnswers: correctAnswers
			};

			return dataObj;
		}

		var correctAnswers = [2, 1, 1, 2, 1, 0, 3, 1, 3, 3];

		var quizQuestions  = [
        {
            type: "text",
            text: "Who is the CEO of IBM?",
            possibilities: [
                {
                    answer: "Sundar Pichai"
                },
                {
                    answer: "Satya Nadella"
                },
                {
                    answer: "Virginia Marie 'Ginni' Rometty"
                },
                {
                    answer: "Pierre Nanterme"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Jeff Bezos is the founder of which Company?",
            possibilities: [
                {
                    answer: "Accenture"
                },
                {
                    answer: "Amazon"
                },
                {
                    answer: "IBM"
                },
                {
                    answer: "Infosys"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Logo of Accenture?",
            possibilities: [
                {
                    answer: "image/amazon.jpg"
                },
                {
                    answer: "image/accenture.jpg"
                },
                {
                    answer: "image/tcs.png"
                },
                {
                    answer: "image/microsoft.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the image of Apple CEO?",
            possibilities: [
                {
                    answer: "image/SirMarkZuckerberg.jpg"
                },
                {
                    answer: "image/SirSundarPichai.jpg"
                },
                {
                    answer: "image/SirTim.jpg"
                },
                {
                    answer: "image/SirSatyaNadella.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "When was Infosys founded and where?",
            possibilities: [
                {
                    answer: "29 December 1945, India"
                },
                {
                    answer: "7 July 1981, Pune, India"
                },
                {
                    answer: "4 February 2004, Cambridge, Massachusetts, United States"
                },
                {
                    answer: " 4 September 1998 Menlo Park, California, United States"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Beat Electronics is the subsidiaries company of?",
            possibilities: [
                {
                    answer: "Apple"
                },
                {
                    answer: "Google"
                },
                {
                    answer: "Accenture"
                },
                {
                    answer: "Microsoft"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is the founder of Wipro?",
            possibilities: [
                {
                    answer: " Charles Ranlett Flint"
                },
                {
                    answer: "Clarence DeLany, Arthur E. Andersen"
                },
                {
                    answer: "J. R. D. Tata and F. C. Kholi"
                },
                {
                    answer: "M.H. Hasham Premji"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of the is of Sir Pierre Nanterme?",
            possibilities: [
                {
                    answer: "image/SirAbidaliNeemuchwala.jpg"
                },
                {
                    answer: "image/SirPierreNanterme.jpg"
                },
                {
                    answer: "image/SirJeffBezos.jpg"
                },
                {
                    answer: "image/SirSundarPichai.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which companies headquarters is at Redmond, Washington, United States?",
            possibilities: [
                {
                    answer: "Google"
                },
                {
                    answer: "Apple"
                },
                {
                    answer: "IBM"
                },
                {
                    answer: "Microsoft"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is not in the founder team of facebook?",
            possibilities: [
                {
                    answer: " Mark Zuckerberg, Andrew McCollum"
                },
                {
                    answer: "Dustin Moskovitz"
                },
                {
                    answer: "Eduardo Saverin, Chris Hughes"
                },
                {
                    answer: " Ronald Wayne"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
		        {
		            type: "Google",
		            image_url: "image/google.jpg",
                    image_url_ceo: "image/SirSundarPichai.jpg",
		            ceo: " Sundar Pichai (2 Oct 2015–)",
		            founded : "4 September 1998 Menlo Park, California, United States",
		            founders : "Larry Page, Sergey Brin",
                    headquarters:"Mountain View, California, United States",
                    subsidiaries: "YouTube, Nik Software, AdMob, ITA Software",
                    linksubsidiaries:"https://www.google.co.in/search?espv=2&biw=1242&bih=545&site=webhp&q=google+subsidiaries&stick=H4sIAAAAAAAAAOPgE-LUz9U3MDFNNk_S0swot9JPzs_JSU0uyczP088vSk_My6xKBHGKrYpLk4ozUzITizJTiwHHENo-OAAAAA&sa=X&ved=0ahUKEwiL0O6zm-7RAhVGwbwKHepwAPYQ44YBCKwBKAUwGg&cad=cbv&bvch=u&sei=_YORWJj4IszovgSk5rtI",
		            description: "Google is an American multinational technology company specializing in Internet-related services and products that include online advertising technologies, search, cloud computing, software, and hardware.",
                    link:"https://en.wikipedia.org/wiki/Google"
		        },
                {
                    type: "Microsoft",
                    image_url: "image/microsoft.jpg",
                    image_url_ceo: "image/SirSatyaNadella.jpg",
                    ceo: " Satya Nadella (4 Feb 2014–)",
                    founded : "4 April 1975, Albuquerque, New Mexico, United States",
                    founders : " Bill Gates, Paul Allen",
                    headquarters:" Redmond, Washington, United States",
                    subsidiaries: " Microsoft Store, Microsoft Studios.,",
                    linksubsidiaries:"https://www.google.co.in/search?q=microsoft&espv=2&biw=1242&bih=545&site=webhp&source=lnms&sa=X&ved=0ahUKEwiSib2d0e7RAhVJQ48KHYX6B3kQ_AUIBygA&dpr=1.1#q=microsoft+subsidiaries",
                    description: "Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services. Its best known software products are the Microsoft Windows line of operating systems, Microsoft Office office suite, and Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2016, it was the world's largest software maker by revenue, and one of the world's most valuable companies.",
                    link:"https://en.wikipedia.org/wiki/Microsoft"
                },
                {
                    type: "IBM",
                    image_url: "image/ibm.gif",
                    image_url_ceo: "image/MamGinniRometty.jpg",
                    ceo: " Virginia Marie 'Ginni' Rometty  (1 Jan 2012-)",
                    founded : "16 June 1911, New York City, New York, United States",
                    founders : "Charles Ranlett Flint",
                    headquarters:" Armonk, North Castle, New York, United States",
                    subsidiaries: " Armonk, North Castle, New York, United States",
                    linksubsidiaries:"https://www.google.co.in/search?noj=1&q=ibm+subsidiaries&stick=H4sIAAAAAAAAAOPgE-LQz9U3MC5OttDSzCi30k_Oz8lJTS7JzM_Tzy9KT8zLrEoEcYqtikuTijNTMhOLMlOLAWj63SE3AAAA&sa=X&ved=0ahUKEwikg9ai2u7RAhVMwI8KHZstDMcQ44YBCMABKAYwGw&biw=1242&bih=545",
                    description: "International Business Machines Corporation is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.",
                    link:"https://en.wikipedia.org/wiki/IBM"
                },
                {
                    type: "Apple",
                    image_url: "image/apple.png",
                    image_url_ceo: "image/SirTim.jpg",
                    ceo: " Timothy Donald Cook (24 Aug 2011–)",
                    founded : "1 April 1976, Cupertino, California, United States",
                    founders : " Steve Jobs, Ronald Wayne, Steve Wozniak",
                    headquarters:" Cupertino, California, United States",
                    subsidiaries: " Beats Electronics, FileMaker Inc.,",
                    linksubsidiaries:"https://www.google.co.in/search?sa=X&espv=2&biw=1242&bih=545&site=webhp&q=apple+subsidiaries&stick=H4sIAAAAAAAAAOPgE2LXz9U3yLao0tLMKLfST87PyUlNLsnMz9PPL0pPzMusSgRxiq2KS5OKM1MyE4syU4sBS_oD7TYAAAA&ved=0ahUKEwiG4NfNwO7RAhWLt48KHcUlDMIQ44YBCKsBKAMwGA",
                    description: "Apple is an American multinational technology company headquartered in Cupertino, California, a suburb of San Jose, that designs, develops, and sells consumer electronics, computer software, and online services.",
                    link:"https://en.wikipedia.org/wiki/Apple_Inc."
                },
                 {
                    type: "Amazon",
                    image_url: "image/amazon.jpg",
                    image_url_ceo: "image/SirJeffBezos.jpg",
                    ceo: " Jeff Bezos (May 1996-)",
                    founded : "5 July 1994, Bellevue, Washington, United States",
                    founders : "Jeff Bezos",
                    headquarters:"Seattle, Washington, United States",
                    subsidiaries: " Audible Inc., Zappos, AbeBooks, Alexa Internet",
                    linksubsidiaries:"https://www.google.co.in/search?noj=1&q=amazon+com+subsidiaries&stick=H4sIAAAAAAAAAOPgE-LQz9U3yE3PTtfSzCi30k_Oz8lJTS7JzM_Tzy9KT8zLrEoEcYqtikuTijNTMhOLMlOLAZDbl2U3AAAA&sa=X&ved=0ahUKEwj5mPae1u7RAhXFpo8KHdbUCLgQ44YBCLoBKAUwIA&biw=1242&bih=545",
                    description: "Amazon.com, often simply Amazon, is an American electronic commerce and cloud computing company, founded on July 5, 1994, by Jeff Bezos and based in Seattle, Washington.",
                    link:"https://en.wikipedia.org/wiki/Amazon.com"
                },
                {
                    type: "Accenture",
                    image_url: "image/accenture.jpg",
                    image_url_ceo: "image/SirPierreNanterme.jpg",
                    ceo: "  Pierre Nanterme (1 Jan 2011–)",
                    founded : " 1989",
                    founders : " Clarence DeLany, Arthur E. Andersen",
                    headquarters:"Chicago, Illinois, United States",
                    subsidiaries: " Avanade, Proquire LLC, Accenture A.S,",
                    linksubsidiaries:"https://www.google.co.in/search?noj=1&biw=1242&bih=545&q=accenture+subsidiaries&stick=H4sIAAAAAAAAAOPgE-LUz9U3MCwqMErW0swot9JPzs_JSU0uyczP088vSk_My6xKBHGKrYpLk4ozUzITizJTiwEZalbPOAAAAA&sa=X&ved=0ahUKEwiXs_a04O7RAhXFPI8KHe9DD1AQ44YBCK8BKAQwHA",
                    description: "Accenture PLC is a global professional services company and provides strategy, consulting, digital, technology and operations services. It has been incorporated in Dublin, Ireland, since 1 September 2009. It is a Fortune Global 500 company.",
                    link:"https://en.wikipedia.org/wiki/Accenture"
                },
                {
                    type: "Infosys",
                    image_url: "image/infosys.jpg",
                    image_url_ceo: "image/SirVishalSikka.jpg",
                    ceo: "  Vishal Sikka (1 Aug 2014-)",
                    founded : " 7 July 1981, Pune, India",
                    founders : " N. R. Narayana Murthy, K. Dinesh, Nandan Nilekani, Ashok Arora, S. D. Shibulal, Kris Gopalakrishnan, N. S. Raghavan",
                    headquarters:" Bengaluru, India",
                    subsidiaries: " EdgeVerve Systems, Infosys BPO Limited, Panaya",
                    linksubsidiaries:"https://www.google.co.in/search?sa=X&noj=1&biw=1242&bih=545&q=infosys+subsidiaries&stick=H4sIAAAAAAAAAOPgE-LUz9U3MMy2qDDT0swot9JPzs_JSU0uyczP088vSk_My6xKBHGKrYpLk4ozUzITizJTiwGLJdq6OAAAAA&ved=0ahUKEwiX45vR6O7RAhWJMI8KHarvCxIQ44YBCMcBKAQwHQ",
                    description: "Infosys Limited is an Indian multinational corporation that provides business consulting, information technology and outsourcing services. It has the main headquarter in Bengaluru, India.",
                    link:"https://en.wikipedia.org/wiki/Infosys"
                },
                {
                    type: "Facebook",
                    image_url: "image/facebook.png",
                    image_url_ceo: "image/SirMarkZuckerberg.jpg",
                    ceo: " Mark Zuckerberg  (Jul 2004-)",
                    founded : " 4 February 2004, Cambridge, Massachusetts, United States",
                    founders : " Mark Zuckerberg, Dustin Moskovitz, Eduardo Saverin, Andrew McCollum, Chris Hughes",
                    headquarters:" Menlo Park, California, United States",
                    subsidiaries: "PrivateCore, Oculus VR, WhatsApp Inc., Instagram",
                    linksubsidiaries:"https://www.google.co.in/search?noj=1&biw=1242&bih=545&q=facebook+Subsidiaries&oq=facebook+Subsidiaries&gs_l=serp.3..0j0i22i30k1.77158.77856.0.79262.2.2.0.0.0.0.139.271.0j2.2.0....0...1c.1.64.serp..0.2.269...0i131k1.bG1g5nP7SiI",
                    description: "Facebook is an American for-profit corporation and online social media and social networking service based in Menlo Park, California.",
                    link:"https://en.wikipedia.org/wiki/Facebook"
                },
                 
                {
                    type: "Tata Consultancy Service",
                    image_url: "image/tcs.png",
                    image_url_ceo: "image/SirNatarajanChandrashekaran.jpg",
                    ceo: "  Natarajan Chandrasekaran  (6 Oct 2009–21 Feb 2017)",
                    founded : " 1968",
                    founders : " Jehangir Ratanji Dadabhoy 'J. R. D.' Tata, Faqir Chand 'F.C.'Kohli",
                    headquarters:" Mumbai, India",
                    subsidiaries: "CMC, TCS e-Serve",
                    linksubsidiaries:"https://www.google.co.in/search?noj=1&biw=1242&bih=545&q=tcs+subsidiaries&oq=tcs+subsidiaries&gs_l=serp.3..0j0i22i30k1.25853.75729.0.76141.6.6.0.0.0.0.201.893.0j5j1.6.0....0...1c.1.64.serp..0.6.890...0i67k1j0i131k1.-4HiprjUIfo",
                    description: "TCS is an International multinational information technology service, consulting and business solutions company headquartered in Mumbai, Maharashtra. It is a subsidiary of the Tata Group and operates in 46 countries",
                    link:"https://en.wikipedia.org/wiki/Tata_Consultancy_Services"
                },
                {
                    type: "Wipro",
                    image_url: "image/wipro.jpg",
                    image_url_ceo: "image/SirAbidaliNeemuchwala.jpg",
                    ceo: "  Abidali Neemuchwala",
                    founded : " 29 December 1945, India",
                    founders : " M.H. Hasham Premji",
                    headquarters:" Bengaluru, India",
                    subsidiaries: "...",
                    linksubsidiaries:"https://en.wikipedia.org/wiki/Wipro",
                    description: "Wipro Limited is an Indian Information Technology Services corporation headquartered in Bangalore, India. In 2013, Wipro demerged its non-IT businesses into a separate companies to bring in more focus on independent businesses.",
                    link:"https://en.wikipedia.org/wiki/Wipro"
                }
		];
