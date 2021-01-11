function PhoneNumber() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item.profile)
    const filterPhone = MappingProfile.filter(item => item.phones.length === 0)
    return filterPhone
}

function Articles() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item)
    const filterArticle = MappingProfile.filter(item => item["articles:"].length > 0)
    return filterArticle
}

function NameAnis() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item)
    const filterName = MappingProfile.filter(item => item.profile.full_name.toLowerCase().includes("annis"))
    return filterName
}

function Article2020() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item)
    const filterArticle2020 = MappingProfile.findIndex(item => [...item["articles:"].filter(item => item.published_at.substring(0, 4) === "2020")])
    return filterArticle2020
}

function Born() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item)
    const filterBorn = MappingProfile.filter(item => item.profile.birthday.substring(0, 4) === "1986")
    return filterBorn
}


function ArticleTips() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item["articles:"])
    const ArticleTips = MappingProfile.map(item => item)
    return ArticleTips
}



function ArticleAug() {
    const data = [
        {
            "id": 323,
            "username": "rinood30",
            "profile": {
                "full_name": "Shabrina Fauzan",
                "birthday": "1988-10-30",
                "phones": [
                    "08133473821",
                    "082539163912"
                ]
            },
            "articles:": [
                {
                    "id": 3,
                    "title": "Tips Berbagi Makanan",
                    "published_at": "2019-01-03T16:00:00"
                },
                {
                    "id": 7,
                    "title": "Cara Membakar Ikan",
                    "published_at": "2019-01-07T14:00:00"
                }
            ]
        },
        {
            "id": 201,
            "username": "norisa",
            "profile": {
                "full_name": "Noor Annisa",
                "birthday": "1986-08-14",
                "phones": []
            },
            "articles:": [
                {
                    "id": 82,
                    "title": "Cara Membuat Kue Kering",
                    "published_at": "2019-10-08T11:00:00"
                },
                {
                    "id": 91,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                },
                {
                    "id": 31,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-11-11T13:00:00"
                }
            ]
        },
        {
            "id": 42,
            "username": "karina",
            "profile": {
                "full_name": "Karina Triandini",
                "birthday": "1986-04-14",
                "phones": [
                    "06133929341"
                ]
            },
            "articles:": []
        },
        {
            "id": 201,
            "username": "icha",
            "profile": {
                "full_name": "Annisa Rachmawaty",
                "birthday": "1987-12-30",
                "phones": []
            },
            "articles:": [
                {
                    "id": 39,
                    "title": "Tips Berbelanja Bulan Tua",
                    "published_at": "2019-04-06T07:00:00"
                },
                {
                    "id": 43,
                    "title": "Cara Memilih Permainan di Steam",
                    "published_at": "2019-06-11T05:00:00"
                },
                {
                    "id": 58,
                    "title": "Cara Membuat Brownies",
                    "published_at": "2019-09-12T04:00:00"
                }
            ]
        }
    ]
    const MappingProfile = data.map(item => item)
    const filterArticleAug = MappingProfile.findIndex(item => item["articles:"].filter((item => item.published_at.substring(5, 7) < "08")))
    return filterArticleAug
}


console.log(ArticleAug())