const channels = [
               {
                name: "BBC News", 
                sources: [
                    { name: "UK", url: "https://tplay.live/out/news/bbc-news/index.m3u8" },
                    { name: "Asia", url: "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8" }
                ], 
                img: "https://i.postimg.cc/s2679ZP4/bbc.jpg", 
                category: "English News",
                package: ["150","250","500"],
                description: "World News"
             },
            { 
                name: "CNN",
                sources: [
                    { 
                        name: "USA", 
                        url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
                        type: "dash",
                        drm: {
                            kid: "900c43f0e02742dd854148b7a75abbec",
                            key: "da315cca7f2902b4de23199718ed7e90"
                        }
                    }
                ],
                img: "https://play-lh.googleusercontent.com/375NW5yL8owK_hW9igW9sh-YJbda9ZcygpDXuVvK_R7l-yJp-fuhb4qvUw_FE4XW4ms", 
                category: "English News",
                package: ["150","250","500"],
                description: "World News"
            },
            { 
                name: "CNN Headlines", 
                sources: [
                    { name: "Server 1", url: "https://mediapackage-ptcn-source.fullscreen.nz/index.m3u8" },

                ], 
                img: "https://i.postimg.cc/3xKMbd8F/cnn-h.jpg", 
                category: "English News",
                package: ["500"],
                description: "Watch CNN Headlines"
            },
            { 
                name: "Al Jazeera", 
                sources: [
                    { name: "Qatar", url: "https://live-hls-web-aje-fa.thehlive.com/AJE/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/50TpLNKY/aljazeera.jpg", 
                category: "English News",
                package: ["150","250","500"],
                description: "World News"
            },
            { 
                name: "Press TV", 
                sources: [
                    { name: "Qatar", url: "https://live.presstv.ir/hls/presstv.m3u8" }
                ], 
                img: "https://i.postimg.cc/mDpyYpdB/presstv.jpg", 
                category: "English News",
                package: ["250","500"],
                description: "Iranian news and documentary"
            },
            { 
                name: "RT", 
                sources: [
                    { name: "Qatar", url: "https://wisewatchoott.wiseplayout.com/RT/master.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/1280px-Russia-today-logo.svg.png", 
                category: "English News",
                package: ["250","500"],
                description: "Russian 24/7 English-language news"
            },
            { 
                name: "Reuters", 
                sources: [
                    { name: "UK", url: "https://dbrb49pjoymg4.cloudfront.net/10001/99951197/hls/playlist.m3u8?ads.xumo_channelId=99951197" }
                ], 
                img: "https://i.postimg.cc/cHCwD43k/reuters-u.jpg", 
                category: "English News",
                package: ["500"],
                description: "World News"
            },
            { 
                name: "Sky News", 
                sources: [
                    { name: "UK Stream 1", url: "https://d25w9q07b2mtmw.cloudfront.net/live/master.m3u8" },
                    { name: "UK Stream 2", url: "https://d3f4oii5n0oeqi.cloudfront.net/11701/88814560/hls/master.m3u8?ads.xumo_channelId=88814560" },
                    { name: "UK Stream 3", url: "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080_30/Live/channel(skynews)/index_mob.m3u8" },
                    { name: "UK Stream 4", url: "https://dbrb49pjoymg4.cloudfront.net/10001/99951223/hls/master.m3u8?ads.xumo_channelId=99951223" },

                ], 
                img: "https://i.postimg.cc/02WZxFkm/sky-news.jpg", 
                category: "English News",
                package: ["250","500"],
                description: "World News"
            },
            { 
                name: "Sky News Now", 
                sources: [
                    { name: "Stream 1", url: "https://amg00663-skynews-skynewsau-samsungau-r7n40.amagi.tv/playlist.m3u8" },

                ], 
                img: "https://i.postimg.cc/x1NGQdp6/sky-news-now.jpg", 
                category: "English News",
                package: ["500"],
                description: "Australia"
            },
            { 
                name: "Bloomberg Television", 
                sources: [
                    { name: "USA", url: "https://dcfcae89.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1pbl9CbG9vbWJlcmdUVl9ITFM/playlist.m3u8" },

                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZCiWELnS_hJTOtsTrWDZKkhkmthiH2BfLA&s", 
                category: "English News",
                package: ["250","500"],
                description: "Global financial and business news"
            },
            { 
                name: "Bloomberg Originals", 
                sources: [
                    { name: "USA", url: "https://f56779ab.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1pbl9CbG9vbWJlcmdPcmlnaW5hbHNfSExT/playlist.m3u8" },

                ], 
                img: "https://i.postimg.cc/vBbrwFKG/bloomberg-org.jpg", 
                category: "English News",
                package: ["500"],
                description: "featuring stories from Businessweek and Bloomberg News"
            },
            { 
                name: "Global News", 
                sources: [
                    { name: "Canada", url: "https://live.corusdigitaldev.com/groupd/live/49a91e7f-1023-430f-8d66-561055f3d0f7/live.isml/.m3u8" },

                ], 
                img: "https://i.postimg.cc/MGTgYV95/global-news.jpg", 
                category: "English News",
                package: ["500"],
                description: "Business, Health, Politics and World News"
            },
            { 
                name: "Fox News HD",
                sources: [
                    { 
                        name: "USA", 
                        url: "https://nog-live1-ott.izzigo.tv/2/out/u/dash/FOX-NEWS-HD/default.mpd",
                        type: "dash",
                        drm: {
                            kid: "aa611985e0c890fdf50d5c6ed88ad0c0",
                            key: "61dc9d01e315bf46ee43bc9fe882ebd8"
                        }
                    }
                ],
                img: "https://i.postimg.cc/15BRz02h/fox-news.jpg", 
                category: "English News",
                package: ["500"],
                description: "U.S. politics and culture"
            },
            { 
                name: "CGTN", 
                sources: [
                  { name: "English", url: "https://english-livebkali.cgtn.com/live/encgtn.m3u8" },
                  { name: "Arabic", url: "https://arabic-livews.cgtn.com/hls/LSveq57bErWLinBnxosqjisZ220802LSTefTAS9zc9mpU08y3np9TH220802cd/playlist.m3u8" },
                  { name: "Español", url: "https://espanol-livews.cgtn.com/hls/LSveOGBaBw41Ea7ukkVAUdKQ220802LSTexu6xAuFH8VZNBLE1ZNEa220802cd/playlist.m3u8" },
                  { name: "Français", url: "https://francais-livews.cgtn.com/hls/LSvev95OuFZtKLc6CeKEFYXj220802LSTeV6PO0Ut9r71Uq3k5goCA220802cd/playlist.m3u8" },
                  { name: "Русский", url: "https://russian-livews.cgtn.com/hls/LSvexABhNipibK5KRuUkvHZ7220802LSTeze9o8tdFXMHsb1VosgoT220802cd/playlist.m3u8" },

                ], 
                img: "https://i.postimg.cc/nLDtqqRw/cgtn.jpg", 
                category: "English News",
                package: ["500"],
                description: "China"
             },
             { 
                name: "NHK World", 
                sources: [
                    { name: "Server 1", url: "https://cdn4.skygo.mn/live/disk1/NHK_World/HLSv3-FTA/NHK_World.m3u8" }
                ], 
                img: "https://i.postimg.cc/dtxLjPmL/nhk-world.jpg", 
                category: "English News",
                package: ["500"],
                description: "Japan and Asia"
             },
             { 
                name: "TOI Global", 
                sources: [
                    { name: "Server 1", url: "https://live.sli.ke/live/npnhm84gz9/fhd/stream.m3u8" }
                ], 
                img: "https://i.postimg.cc/h4QwtVyC/toi.jpg", 
                category: "English News",
                package: ["500"],
                description: "Times of India"
             },
             { 
                name: "DD News", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/0811cd8c37ca4c409d5385a6cd2fa18b/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/c4y3Vd73/dd.png", 
                category: "News",
                description: "India"
             },
             { 
                name: "Sansad TV 1", 
                sources: [
                    { name: "LokSabha", url: "https://hls.media.nic.in/hls/live/lstv/lstv.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/2fK9Y8FCQvlRWuIojyWIywPKRU4TgzfwCTciLzlTOT9wQScACk_7Y9LFuWfBBgoWDZe_UhzQQR0=s900-c-k-c0x00ffffff-no-rj", 
                category: "News",
                description: "India"
             },
             { 
                name: "Sansad TV 2", 
                sources: [
                    { name: "Rajya Sabha", url: "https://hls.media.nic.in/hls/live/rstv/rstv.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/2fK9Y8FCQvlRWuIojyWIywPKRU4TgzfwCTciLzlTOT9wQScACk_7Y9LFuWfBBgoWDZe_UhzQQR0=s900-c-k-c0x00ffffff-no-rj", 
                category: "News",
                description: "India"
             },
             { 
                name: "India News", 
                sources: [
                    { name: "National", url: "https://newsxott.in/hls/indianewsnational.m3u8" },
                    { name: "Gujarat", url: "https://newsxott.in/hls/indianewsgujarat.m3u8" },
                    { name: "Haryana", url: "https://newsxott.in/hls/indianewsharyana.m3u8" },
                    { name: "Punjab", url: "https://newsxott.in/hls/indianewspunjab.m3u8" },
                    { name: "Uttar Pradesh", url: "https://newsxott.in/hls/indianewsupuk.m3u8" },
                ], 
                img: "https://karthavya.com/wp-content/uploads/2019/07/India-News-Live.png", 
                category: "News",
                description: "India"
             },
             { 
                name: "News X", 
                sources: [
                    { name: "News X", url: "https://newsxott.in/hls/newsx.m3u8" },
                    { name: "News X World", url: "https://newsxott.in/hls/newsxworld.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/zwrmWphe47oXEHVndsokIHupuBpVWq2_a_LCxiV_JA0YmaosO7S3kMeFyTNhNLUO8ovmT3hDfX0=s900-c-k-c0x00ffffff-no-rj", 
                category: "News",
                description: "India"
             },
             { 
                name: "First India News", 
                sources: [
                    { name: "Server 1", url: "https://xlbor37ydvaj-hls-live.wmncdn.net/firstindianewstv1/live.stream/index.m3u8" }
                ], 
                img: "https://play-lh.googleusercontent.com/iJZoVQx0zOCpmQ-z_ey2Y2NspoXA2vjQDm49KPioIzUka9sT8-HAEnmdQXuzxSwauQ=w600-h300-pc0xffffff-pd", 
                category: "News",
                description: "India"
             },
             { 
                name: "News18 India", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/News18_India_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://erp.adgully.com/artical_image/a4f638aa199ee1ccb9ffdc24d9c2af25.jpeg", 
                category: "News",
                description: "India"
             },
             { 
                name: "News18 Odia", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/News18_Odia_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s900-c-k-c0x00ffffff-no-rj", 
                category: "News",
                description: "India"
            },
            { 
                name: "News18 Urdu", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/News18_Urdu_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/News18_Urdu_logo.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "News18 Kerala", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/News18_Kerala_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/0/05/News18_Kerala.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Aaj Tak", 
                sources: [
                    { name: "Server 1", url: "https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/live_404p/chunks.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/7/77/Aaj_Tak_logo.svg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Aaj Tak HD", 
                sources: [
                    { name: "Server 1", url: "https://livehub-voidnet.onrender.com/cluster/streamcore/in/AAJTAK_REDIS.m3u8" },
                    { name: "Server 2", url: "https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/0jjjL9vR/aaj-tak.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "NDTV 24/7", 
                sources: [
                    { name: "Server 1", url: "https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8" },
                ], 
                img: "https://onlineradiofm.in/assets/image/radio/180/NDTV-24X7-Radio.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "NDTV India", 
                sources: [
                    { name: "Server 1", url: "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8" },
                ], 
                img: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/05/Pictures/_8ba2e79a-a350-11e6-93ed-ab826829dd0b.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "India Today", 
                sources: [
                    { name: "Server 1", url: "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8" },
                ], 
                img: "https://akm-img-a-in.tosshub.com/indiatoday/images/livetv/indiaToday.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "India TV Speed News", 
                sources: [
                    { name: "Server 1", url: "https://poclive-indiatvnews.akamaized.net/hlslive/Admin/px0219297/live/janya/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/HNUGXVlQ05nqlFouGhScjNXE33T-qaF20GWFjo_fj97Rc6gcv8LNTw1ao5aK_B4OH5_iPLkPRA=s900-c-k-c0x00ffffff-no-rj", 
                category: "News",
                description: "India"
            },
            { 
                name: "Zee Bharat",
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeehindustan/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "10616d7c4bee41f1825bd805c6295172",
                            key: "dc85f2112f63477fb39fc149493c49be"
                        }
                    }
                ],
                img: "https://imagesdishtvd2h.whatsonindia.com/dasimages/channel/landscape/360x270/TknReKLD.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Zee Bihar Jharkhand",
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebiharjharkhand/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "e1ec6098b5014ac7aae0b37f72d5e85e",
                            key: "c04950f25d8e4107a96e828e7911e53b"
                        }
                    }
                ],
                img: "https://imagesdishtvd2h.whatsonindia.com/dasimages/channel/landscape/360x270/5zkMvEbF.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Zee Business",
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebusiness/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "bef87892e58c446d893b16a848703b70",
                            key: "51959fcbc8fe4091b570ba254bf749ae"
                        }
                    }
                ],
                img: "https://imagesdishtvd2h.whatsonindia.com/dasimages/channel/landscape/360x270/vExrDK9r.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Mirror Now", 
                sources: [
                    { name: "Server 1", url: "https://dai.google.com/linear/hls/event/ClPOullTQky5vGPf7fMZ8g/master.m3u8" },
                    { name: "Server 2", url: "https://pubads.g.doubleclick.net/ssai/event/DXkHhH2QSnma-HnE3QJqlA/master.m3u8" },
                ], 
                img: "https://media.licdn.com/dms/image/v2/C4D0BAQERZwk1iL4m_w/company-logo_200_200/company-logo_200_200/0/1631322422535?e=2147483647&v=beta&t=Dk2eJzcMflN0nQxbryoMPfaCZRSgCmlrPk4A6XbCebI", 
                category: "News",
                description: "India"
            },
            { 
                name: "ET Now", 
                sources: [
                    { name: "Server 1", url: "https://pubads.g.doubleclick.net/ssai/event/pJrzNyDoT_K_GwYQsijTsQ/master.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://212.102.34.8:9080/ETNOW/video.m3u8" }
                ], 
                img: "https://www.medianews4u.com/wp-content/uploads/2025/12/ET-NOW-Unveils-a-Powerful-New-Programming-Slate_-All-About-Your-Company-DEEP-DIVE-BrandVerse-and-Year-End-Programming-2025.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "ET Now Swadesh", 
                sources: [
                    { name: "Server 1", url: "https://d32gxr3r1ksq2p.cloudfront.net/master.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8s5ukJJCvsZwP7vO8PlUKJHwlnyHZqBiYlA&s", 
                category: "News",
                description: "India"
             },
             { 
                name: "CNBC Awaaz", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/CNBC_Awaaz_NW18_MOB/output01/master.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/CNBC_Awwaz_2025.svg", 
                category: "News",
                description: "India"
             },
             { 
                name: "CNBC Bajar", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/CNBC_Bazaar_NW18_MOB/output01/master.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/27307b18067a6f2784b1597da20426ff.png", 
                category: "News",
                description: "India"
             },
             { 
                name: "CNBC TV18", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/CNBC_TV18_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://media.licdn.com/dms/image/v2/D4D0BAQGXbP9MEGQ2MA/company-logo_200_200/B4DZcIT5xiGgAI-/0/1748191125673/cnbc_tv18_logo?e=2147483647&v=beta&t=KFbzWG-tLyBsxJILxVo9cAiyFHaZP_BPhTVOCTH_AFc", 
                category: "News",
                description: "India"
             },
             { 
                name: "CNN News18", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/CNN_News18_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://erp.adgully.com/artical_image/43d69552e24c92ea14e14bca3007eb78.jpeg", 
                category: "News",
                description: "India"
             },
             { 
                name: "Kashish News", 
                sources: [
                    { name: "Server 1", url: "https://server.thelegitpro.in/kashishnews/kashishnews/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/8d69aeee54fa6a6d9feae943d972eaa7.png", 
                category: "News",
                description: "Jharkhand & Bihar"
             },
             { 
                name: "NEWS11 Bharat", 
                sources: [
                    { name: "Server 1", url: "https://mumt02.tangotv.in/NEWS11BHARAT/index.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwZ9A80iMUyTVqQDL6AdzrUmpZdxO090eUA&s", 
                category: "News",
                description: "Jharkhand & Bihar"
             },
             { 
                name: "Kairali News", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1469/master.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Kairali_TV.svg", 
                category: "News",
                description: "Malayalam"
             },
             { 
                name: "Manorama News", 
                sources: [
                    { name: "Server 1", url: "https://mmtvnews1.akamaized.net/v1/master/673630b269b766886555eebfddd4f27f3de3ab50/mmtvNewsCampaign1/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/0a22e24d565a1f951c03e2008216de15.png", 
                category: "News",
                description: "Malayalam"
             },
             { 
                name: "Media One", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1481/master.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MXv3hLTU1hj3ZUPC8g5RH4-0J7CbrakGzA&s", 
                category: "News",
                description: "Malayalam"
             },
             { 
                name: "Malai Murasu TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1606/master.m3u8" }
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/d/d1/Malai_Murasu.png/revision/latest?cb=20191229035538", 
                category: "News",
                description: "Tamil"
             },
             { 
                name: "Jaya Plus", 
                sources: [
                    { name: "Server 1", url: "https://satoshi-cors.herokuapp.com/http://45.148.145.57/IN_JayaPlus/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/ed00e083788380a3523e2ef1d7f33fe8.png", 
                category: "News",
                description: "Tamil"
             },
             { 
                name: "ETV Andhra Pradesh", 
                sources: [
                    { name: "Server 1", url: "https://d14vo2b97spizt.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_AP_H264-3_cloud_in/index.m3u8" }
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/5/5f/ETV_Andhra_Pradesh.png/revision/latest?cb=20240314105548", 
                category: "News",
                description: "Telugu"
             },
             { 
                name: "SITI 24X7", 
                sources: [
                    { name: "Server 1", url: "https://www.schannels.in/SITI24X7_1/index.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/cSsxzVa-2j7DQ7ZLaRSS5oV4RVtkfiwIZoccMKSyitWXf5g1UyYcwavRI2rr-9JaBO52e_6T=s176-c-k-c0x00ffffff-no-rj-mo", 
                category: "News",
                description: "Telugu"
             },
             { 
                name: "Nagaland TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-6.pishow.tv/live/10014/master.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/44b5607770003fbe0016e2fcc76c1d27.png", 
                category: "News",
                description: "Assamese/English"
             },
             { 
                name: "MBCTV", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/MBCTV/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtjnyTDqsFChVwz0ZS_ww_8GUFnjfnbXmxw&s", 
                category: "News",
                description: "Odia"
             },
             { 
                name: "Ekamra Bharat", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/bharat/bharat/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/02p7JKxy/ekamra-bharat.jpg", 
                category: "News",
                description: "Odia"
             },
             { 
                name: "Sangsad TV", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/bd-sangsad.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/RVR9YF6Y/sangsad.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "BTV", 
                sources: [
                    { name: "Server 1", url: "https://www.btvlive.gov.bd/live/37f2df30-3edf-42f3-a2ee-6185002c841c/BD/d96eb7f4-83c2-4472-9597-3568390a8ebf/index.m3u8" },
                    { name: "Server 2", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nzQXt33R/btv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh"
            },
            { 
                name: "BTV Chattogram", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/btv-chattagram.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mgvdN3ZW/btv-cht.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Somoy TV", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/somoy/index.m3u8" },
                    { name: "Server 3", url: "https://tplay.live/out/news/somoy-tv/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/HsVVr6FH/somoy-tv.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Jamuna Television", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/jamuna/index.m3u8" },
                    { name: "Server 3", url: "https://tplay.live/out/news/jamuna-tv/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/dtR7Gh4t/jamuna-tv.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Independent TV",
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/independent-tv/index.m3u8" },
                    { name: "Server 3", url: "https://bongoflixbd.top/stream.php?id=22f28ae5-8c15-4904-b9f6-70bbd94cbc43&e.m3u8" },

                ], 
                img: "https://i.postimg.cc/3rL7TH81/Independent-TV.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Channel 24",
                sources: [
                    { name: "Server 1", url: "https://ch24cdn.ncare.live/channel24/ch24office/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/channel-24/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/CHANNEL24/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/QdqkCSFX/channel-24.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "News 24",
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/news-24/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/bNJny8Qw/news-24.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Ekhon",
                sources: [
                    { name: "Server 1", url: "https://jago-bosta.global.ssl.fastly.net/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/globaltv.stream/tracks-v1a1/mono.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/ekhontv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/KcHxyPzx/ekhon.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "Ekattor Television",
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/ekattor-tv/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/ekattor/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/jjtWwrG9/ekattor-tv.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "ATN News",
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/news/atn-news/index.m3u8" },
                    { name: "Server 2", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/ZRFCxYdp/atn-news.png", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "DBC News",
                sources: [
                    { name: "Server 1", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/dbcnews.stream/mono.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/dbc/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/cJGD5HdQ/dbc.jpg", 
                category: "News",
                description: "Bangladesh"
            },
            { 
                name: "News18 Bangla", 
                sources: [
                    { name: "Server 1", url: "https://n18syndication.akamaized.net/bpk-tv/News18_Bangla_NW18_MOB/output01/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Dydmbp8n/news18-bangla.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "ABP Ananda", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-ananda/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/HjGW7XCJ/abp-ananda.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Zee 24 Ghanta", 
                sources: [
                    { name: "Server 1", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-zee24ghantaa-xiaomi/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/pdgPSKps/zee-24ghanta.png", 
                category: "News",
                description: "India"
            },
            { 
                name: "Kolkata TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/KOLKATATV/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mkVfbs7P/kolkatatv.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "MBC TV Odisha", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/MBCTV/index.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcLnb_i5kxG-7DhXERKQ3kAZaQihpn8gvlA&s", 
                category: "News",
                description: "Odia"
            },
            { 
                name: "WION", 
                sources: [
                    { name: "Server 1", url: "https://d7x8z4yuq42qn.cloudfront.net/index_1.m3u8" }
                ], 
                img: "https://i.postimg.cc/ZKqXrCqn/wion.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Al Ekhbariya", 
                sources: [
                    { name: "Arabic", url: "https://cdn-globecast.akamaized.net/live/eds/al_ekhbariya/hls_roku/index.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/%D8%A7%D9%84%D9%82%D9%86%D8%A7.png", 
                category: "News",
                description: "Saudi Arabia"
            },
            { 
                name: "Libya Al Wataniya", 
                sources: [
                    { name: "Arabic", url: "https://cdn-globecast.akamaized.net/live/eds/libya_al_watanya/hls_roku/index.m3u8" }
                ], 
                img: "https://i.imgur.com/KSUny9D.jpeg", 
                category: "News",
                description: "Libya"
            },
            { 
                name: "Disney Channel", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://dash2.antik.sk/stream/hisi_disney_channel/playlist_cbcs.mpd",
                        type: "dash",
                        drm: {
                            kid: "11223344556677889900112233445566",
                            key: "4b80724d0ef86bcb2c21f7999d67739d"
                        }
                    }
                ], 
                img: "https://images.seeklogo.com/logo-png/25/1/new-disney-channel-logo-png_seeklogo-255285.png", 
                category: "Kids",
                package: ["150","250","500"],
                description: "World"
            },
            { 
                name: "Disney Junior", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://dash2.antik.sk/stream/hisi_disney_jr/playlist_cbcs.mpd",
                        type: "dash",
                        drm: {
                            kid: "11223344556677889900112233445566",
                            key: "edef8ba979d64acea3c827dcd51d21ed"
                        }
                    }
                ], 
                img: "https://cms-media.clink.services/Mobile_ree4ih.png", 
                category: "Kids",
                package: ["150","250","500"],
                description: "World"
            },
            { 
                name: "Disney XD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://dash2.antik.sk/stream/hisi_disney_jr/playlist_cbcs.mpd",
                        type: "dash",
                        drm: {
                            kid: "11223344556677889900112233445566",
                            key: "4b80724d0ef86bcb2c21f7999d67739d"
                        }
                    }
                ], 
                img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/CD4826FEC87B2F49DC854B8A74BDACD5AB6C21056C3833D1A0AC77158E76DA12/compose?aspectRatio=1.78&format=webp&width=600", 
                category: "Kids",
                package: ["150","250","500"],
                description: "World"
            },
            {
                name: "Duronto",
                sources: [
                    { name: "Bangla", url: "https://tvsen4.aynaott.com/durontotv/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/4xgPNDrf/duronto.jpg", 
                category: "Kids",
                description: "Bangladesh"
            },
            {
                name: "Rongeen TV",
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1029/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/Z5bg3drK/rongeen.jpg", 
                category: "Kids",
                description: "India"
            },
            {
                name: "Sony Yay",
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYYAY/tracks-v1a1/mono.m3u8" },
                    { name: "Server 2", url: "https://bostaflix.vercel.app/api/roarzone.m3u8?stream=toffee/sonyyay" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/sonyyay/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/1413YzhR/yay.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Sony Yay Tamil", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(SonyYay)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "582e9e382cb0495886afbabdbdb6fbf7",
                            key: "c0f550839b235443724cd007392b6e40"
                        }
                    }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/7a5c1a5aa0cd931646a7d3d078a740bc.png", 
                category: "Kids",
                package: ["150","250","500"],
                description: "Tamil"
            },
            { 
                name: "Discovery Kids", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverykids2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "601f58d4b7094d2baf78c85d1d9cb6c9",
                            key: "609e0cc03198455fa36fd2cc3e7f940d"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/Gt38t22F/d-kids.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Sonic", 
                sources: [
                    { name: "Hindi", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONIC/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/a/aa/Nickelodeon_Sonic_logo_2025.png/revision/latest/scale-to-width-down/300?cb=20250606121016", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Nick", 
                sources: [
                    { name: "Hindi", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/NICK/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://i.postimg.cc/W1gnHqtC/nick.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Nick Jr", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "bab5c11178b646749fbae87962bf5113",
                            key: "0ac679aad3b9d619ac39ad634ec76bc8"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/BvP8G3sq/nickjr.jpg", 
                category: "Kids",
                package: ["150","250","500"],
                description: "World"
            },
            { 
                name: "Nickelodeon", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Nickelodeon)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "9b10e787fac84ff484c8c7d7f7668925",
                            key: "7d7d3793e4489f6ebc50d002e4bdbd44"
                        }
                    }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Nickelodeon_2023_logo.png", 
                category: "Kids",
                package: ["150","250","500"],
                description: "World"
            },
            { 
                name: "Gubbare", 
                sources: [
                    { name: "Hindi", url: "https://epiconvh.akamaized.net/live/gubbare/master.m3u8" },
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/0/01/Gubbare-TV_channel.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Bal Bharat", 
                sources: [
                    { name: "Hindi", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/BALBHARAT/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/NBgAvACr755c2gd5EK0lKKmeqEnMivDhF2FYd399NRfeZzosNkxsgkrjMOdfh5ZBqv2OTXviH3U=s900-c-k-c0x00ffffff-no-rj", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Pogo", 
                sources: [
                    { name: "Server 1", url: "https://livecdn-bostaflix.global.ssl.fastly.net/live.php?id=667189f69164&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/L5tFKBL4/pogo.jpg", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Cartoon Network", 
                sources: [
                    { name: "Hindi", url: "https://mrzplayin.fun/roarzon/stream.php?id=2656a9b9198a7631e0521a2582e998f5&e=.m3u8" },
                    { name: "Urdu", url: "https://vodzong.mjunoon.tv:8087/streamtest/cartoon-network-87/playlist.m3u8" },
                    { name: "Urdu", url: "https://s3.ideationtec.live/Cartoon_Network/Cartoon_Network.m3u8" }
                ], 
                img: "https://i.postimg.cc/d1K0Drvh/Cn.png", 
                category: "Kids",
                description: "India"
            },
            { 
                name: "Cartoon Network HD+", 
                sources: [
                    { name: "Server 1", url: "https://mrzplayin.fun/roarzon/stream.php?id=374c459701ac3b0ba6b1bbb7f82ddd65&e=.m3u8" },                ], 
                img: "https://i.postimg.cc/d06FD9xw/cnhd.jpg", 
                category: "Kids",
                description: "Hindi/English"
            },
            { 
                name: "Hungama", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/HUNGAMA/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hungama_TV.svg/250px-Hungama_TV.svg.png", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "Super Hungama", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SUPERHUNGAMA/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/7/74/Super_Hungama_Logo.png", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "Minimax", 
                sources: [
                    { name: "Server 1", url: "https://vodzong.mjunoon.tv:8087/streamtest/disckids-157-1/playlist.m3u8" },
                    { name: "Server 2", url: "https://s2.ideationtec.live/MiniMax/MiniMax.m3u8" }
                ], 
                img: "https://i.postimg.cc/xC2TbNWn/minimax.jpg", 
                category: "Kids",
                description: "Urdu"
            },
            { 
                name: "Animax", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "92032b0e41a543fb9830751273b8debd",
                            key: "03f8b65e2af785b10d6634735dbe6c11"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/8PQrRLN8/Animax.png", 
                category: "Kids",
                package: ["150","250","500"],
                description: "English"
            },
            { 
                name: "Power Kids",
                sources: [
                    { name: "Server 1", url: "https://cc-j2qrmdlg5y7lg.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-j2qrmdlg5y7lg/powerkids.m3u8" },
                ], 
                img: "https://i.postimg.cc/gr9v9Tt9/pk.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "Zoo Moo",
                sources: [
                    { name: "Server 1", url: "https://cdn.skygo.mn/live/disk1/Zoomoo/HLSv3-FTA/Zoomoo.m3u8" },
                    { name: "Server 2", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=40" },
                ], 
                img: "https://i.postimg.cc/3J0Thmrb/zoo-moo.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Toon Googles",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=33" },
                ], 
                img: "https://play-lh.googleusercontent.com/AU1wSj49k4rUyt2jv_1Ui3uYwAJIM90tAChT9JMNsqcB2FsVA9bF4fuT27uqn3uDCYk=w240-h480-rw", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "TG Junior",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=31" },
                ], 
                img: "https://img3.static-ottera.com/prod/tg/linear_channel/thumbnails/widescreen/480x270/tgjr_1.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Sparkle Power",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=35" },
                ], 
                img: "https://img2.static-ottera.com/prod/tg/linear_channel/thumbnails/widescreen/640x360/sparkle-power-1920-x-1080.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Afro Kiddos",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=13775" },
                ], 
                img: "https://img2.static-ottera.com/prod/tg/linear_channel/thumbnails/widescreen/640x360/B_-dvleanz-xCmycNaftzR56Q_q1iIjayGtFcKA_ILc.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Eddie's Wonderland",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=294" },
                ], 
                img: "https://img2.static-ottera.com/prod/tg/linear_channel/thumbnails/widescreen/480x270/eddies-wonderland-2021_d.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Gross Out TV",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=41" },
                ], 
                img: "https://img2.static-ottera.com/prod/tg/linear_channel/thumbnails/widescreen/640x360/gross-out-1920-x-1080-.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Camp Spoopy",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=264" },
                ], 
                img: "https://img3.static-ottera.com/prod/tg/linear_channel/logo/640x360/camp-spoopy-2021_1920-x-1080_option-5.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "Kids Flix",
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=50" },
                ], 
                img: "https://play-lh.googleusercontent.com/hMM6boFl8BdsgqeHAycUoyNnyRJZSSeFXPAqA2FesVAxqwjzOVEMoNXMl8-JncB1ZU4", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "BBC Cbeebies",
                sources: [
                    { name: "Server 1", url: "https://cdn4.skygo.mn/live/disk1/Cbeebies/HLSv3-FTA/Cbeebies.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/uyeShLXK1reEq1zTYVtZkL9IoQb18T-G96q8HqCpb-uAxY4gxaR6KuuUo1KudRQfuDHMYSYcEg=s900-c-k-c0x00ffffff-no-rj", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "24/7 Jungle Book", 
                sources: [
                    { name: "Playlist", url: "https://cc-4bhi5osabejc9.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4bhi5osabejc9/junglebook.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWHwxLoNifJmfg_l-i380r8xqKhPheAuYLQ&s", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Motu Patlu", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/motu-patlu/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/sgxQd9gz/motu-patlu.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Ninja Hattori", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/ninja-hattori/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Kz0h2LzX/ninja-hattori.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Doraemon", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/doraemon/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/7hrsjZ1v/doraemon.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Oggy and the Cockroaches", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/oggy-and-the-cockroaches/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/25T1j5cX/oggy2.jpg", 
                category: "Kids",
                description: "Hindi"
            },
            { 
                name: "24/7 Gopal Bhar", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/gopal-bhar/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Pxj1jp7M/gopal-bhar.jpg", 
                category: "Kids",
                description: "Bengali"
            },
            { 
                name: "24/7 Bantul The Great", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/kids/bantul-the-great/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/X7pGtkJb/bantul.jpg", 
                category: "Kids",
                description: "Bengali"
            },
            { 
                name: "24/7 Tom And Jerry",
                sources: [
                    { name: "Server 1", url: "https://live.iill.top/huya.php?id=11352879&e=.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-208314/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/xd5gYkM8/tom-jerry.jpg", 
                category: "Kids",
                description: "English"
            },
            { 
                name: "24/7 Music", 
                sources: [
                  { name: "Server 1", url: "https://tplay.live/out/music/world-music.index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                package: ["500"],
                description: "English Songs"
            },
            { 
                name: "24/7 Music", 
                sources: [
                  { name: "Server 1", url: "https://tplay.live/out/music/indian-music.index.m3u8" },
                  { name: "Server 2", url: "https://tplay.live/out/music/world-music2.index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                package: ["500"],
                description: "Top Hits "
            },
            { 
                name: "24/7 Music", 
                sources: [
                  { name: "Server 1", url: "https://tplay.live/out/music/indian-music2.index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                package: ["500"],
                description: "Hindi Songs"
            },
            { 
                name: "Music India", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/226/master.m3u8" },
                    { name: "Server 2", url: "https://mumt05.tangotv.in/MUSICINDIA/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/QNYG5Kz9/music-india.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "yrf MUSIC", 
                sources: [
                    { name: "Stream 1", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8" },
                    { name: "Stream 2", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/yrf-music/master.m3u8" }

                ], 
                img: "https://i.postimg.cc/pdHkcC7q/yrf-music.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "India"
            },
            { 
                name: "Zoom Music", 
                sources: [
                    { name: "Stream 1", url: "https://pubads.g.doubleclick.net/ssai/event/JCAm25qkRXiKcK1AJMlvKQ/master.m3u8" },
                    { name: "Stream 2", url: "https://d1g66oqspoyxao.cloudfront.net/master.m3u8" },
                    { name: "Stream 3", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8" }

                ], 
                img: "https://i.postimg.cc/D0GYG0Dr/zoom.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "9XM", 
                sources: [
                    { name: "Stream 1", url: "https://wiselp.wiseplayout.com/9XM/master.m3u8" },
                    { name: "Stream 2", url: "https://d14c63magvk61v.cloudfront.net/strm/channels/9xm/master.m3u8" },
                    { name: "Stream 3", url: "https://9xjio.wiseplayout.com/9XM/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/Wb8VmBjp/9xm.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "B4U Music", 
                sources: [
                    { name: "Stream 1", url: "https://mumt04.tangotv.in/B4UMUSIC/index.m3u8" },
                    { name: "Stream 2", url: "https://cdn-2.pishow.tv/live/415/master.m3u8" },
                    { name: "Stream 3", url: "https://mumbai-edge.smartplaytv.in/B4uMusic/index.m3u8" },
                    { name: "Stream 3", url: "https://edge2.roarzone.info:8447/roarzone/edge3/b4u-music/index.m3u8" },
                    { name: "Stream 4", url: "https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/mrvFm9CF/B4-U-Music.png", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Mastiii", 
                sources: [
                    { name: "Stream 1", url: "https://d1taaads3ztvmu.cloudfront.net/120723/mastii/chunklist.m3u8" },
                    { name: "Stream 2", url: "https://mumt02.tangotv.in/MASTIII/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/L4f6PQnh/mastiii.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "India"
            },
            { 
                name: "Deewana", 
                sources: [
                    { name: "Stream 1", url: "https://anywhere.pwisetthon.com/https://tplay.live/originals/deewana/index.m3u8" },
                    { name: "Stream 2", url: "https://tplay.live/originals/deewana/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/9Q7G21N6/Deewana.png", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Hindi Hits", 
                sources: [
                    { name: "Stream 1", url: "https://mumt01.tangotv.in/HINDIHITS/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/LsxnsjGm/hindi-hits.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Evergreen Hits", 
                sources: [
                    { name: "Stream 1", url: "https://mumt02.tangotv.in/EVERGREENHITS2/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/vTg1kDqw/evergreen-hits2.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Melody Hits", 
                sources: [
                    { name: "Stream 1", url: "https://mumt03.tangotv.in/MELODYHITS/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/KYpnR1HC/melody-hits.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Classic Hits", 
                sources: [
                    { name: "Stream 1", url: "https://mumt03.tangotv.in/CLASSICHITS/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Kvbgc7YM/classic-hits.jpg", 
                category: "Music",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "NH BollyRaga", 
                sources: [
                    { name: "Stream 1", url: "https://cc-up9j649x4thrj.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-up9j649x4thrj/SBUM/RunnTV/BollyRaga_IN/BollyRaga_IN.m3u8" }
                ], 
                img: "https://i.postimg.cc/fbkbmd2g/nh-br.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "India"
            },
            { 
                name: "Insync", 
                sources: [
                    { name: "Stream 1", url: "https://mumt04.tangotv.in/INSYNC/index.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf8vivzH870a8bvAvQOoFXSnmBm_cSwMF8g&s", 
                category: "Music",
                package: ["250","500"],
                description: "India"
            },
            { 
                name: "Joo Music", 
                sources: [
                    { name: "Stream 1", url: "https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8" }
                ], 
                img: "https://image.roku.com/developer_channels/prod/9cf63093182d69095ae19a443776978bb2398161ccc2dbda94e71f200b85f511.png", 
                category: "Music",
                package: ["250","500"],
                description: "Europe & Africa"
            },
            { 
                name: "8XM", 
                sources: [
                    { name: "Stream 1", url: "https://vodzong.mjunoon.tv:8087/streamtest/8XM-131/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/Qd4nc618/8xm.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "Pakistan"
            },
            { 
                name: "Jalwa", 
                sources: [
                    { name: "Stream 1", url: "https://vodzong.mjunoon.tv:8087/streamtest/JalwaTV-135/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/pTGNr2Cw/jalwa.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "Pakistan"
            },
            { 
                name: "9X Jalwa", 
                sources: [
                    { name: "Stream 1", url: "https://wiselp.wiseplayout.com/9X_Jalwa/master.m3u8" },
                    { name: "Stream 2", url: "https://d14c63magvk61v.cloudfront.net/strm/channels/9xjalwa/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/h4VgFtZS/9x-jalwa.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "India"
            },
            { 
                name: "9X Tashan", 
                sources: [
                    { name: "Stream 1", url: "https://9xjio.wiseplayout.com/9X_Tashan/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/kMwkxRB1/9x-tashan.jpg", 
                category: "Music",
                description: "Punjabi"
            },
            { 
                name: "E 24", 
                sources: [
                    { name: "Stream 1", url: "https://amg13643-amg13643c2-amgplt0173.playout.now3.amagi.tv/playlist/amg13643-amg13643c2-amgplt0173/playlist.m3u8" },
                    { name: "Stream 2", url: "https://bagnetwork.digivive.com/hlslive/Admin/px09241091/live/E24LiveB/master_1.m3u8" },
                    { name: "Stream 3", url: "https://mumt04.tangotv.in/E24/index.m3u8" },
                    { name: "Stream 4", url: "https://live-e24.dailyhunt.in/eternowsa/live/amlst:E24_,b256,b512,b1024,b1824,.smil/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/wBKM5G7V/e-24.jpg", 
                category: "Music",
                package: ["250","500"],
                description: "Hindi/Punjabi"
            },
            { 
                name: "Steelbird Music", 
                sources: [
                    { name: "Stream 1", url: "https://cdn2.in/SteelbirdMusicTVhls/live.m3u8" },
                    { name: "Stream 2", url: "https://cdn-4.pishow.tv/live/1504/master.m3u8" },
                    { name: "Stream 3", url: "https://server.livelegitpro.in/punjabihits/index.m3u8" },                
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/93926d5dd30455efa55a1c0a3bb797e9.png", 
                category: "Music",
                package: ["250","500"],
                description: "Punjabi"
            },
            { 
                name: "Only Music", 
                sources: [
                    { name: "Stream 1", url: "https://mumbai-edge.smartplaytv.in/OnlyMusic/index.m3u8" },
                    { name: "Stream 2", url: "https://livestream.unlimitedcdn.com/onlymusic/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/shows/2026-03-12/260312903011.jpg?width=700", 
                category: "Music",
                package: ["250","500"],
                description: "Punjabi"
            },
            { 
                name: "Josh TV", 
                sources: [
                    { name: "Stream 1", url: "https://mumt03.tangotv.in/JOSHTV/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/yY6RNL41/joshtv.jpg", 
                category: "Music",
                description: "Punjabi"
            },
            { 
                name: "Punjabi Music HD", 
                sources: [
                    { name: "Stream 1", url: "https://mumt02.tangotv.in/PUNJABIMUSICHD/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/d0f62zFZ/punjabi-musichd.jpg", 
                category: "Music",
                description: "Punjabi"
            },
            { 
                name: "Punjabi Hits", 
                sources: [
                    { name: "Stream 1", url: "https://legitpro.co.in/punjabihits/punjabihits/index.m3u8" },
                    { name: "Stream 2", url: "https://live1.ottlive.co.in/tabbarhitsswift/index.m3u8" },
                    { name: "Stream 3", url: "https://server.livelegitpro.in/punjabihits/index.m3u8" },                
                ], 
                img: "https://play-lh.googleusercontent.com/Z5eBTFh01UZmECMBw2buJ3i2mWeRKYu3jgYrmN-byioWwpzOrCImYR6LRAtd53QrueM", 
                category: "Music",
                package: ["250","500"],
                description: "Punjabi"
            },
            { 
                name: "PTC Music", 
                sources: [
                    { name: "Stream 1", url: "https://d2lk5u59tns74c.cloudfront.net/out/v1/f913cf893c594f73b114216e74a2efbc/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/zvj04hnW/ptc-music.jpg", 
                category: "Music",
                description: "Punjabi"
            },
            { 
                name: "PTC Chak De", 
                sources: [
                    { name: "Stream 1", url: "https://cdn-1.pishow.tv/live/449/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/G2BRLcM2/ptc-chakde.jpg", 
                category: "Music",
                description: "Punjabi"
            },
            { 
                name: "Ragni TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/RAGNITV/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/SQcv7NPS/ragni.jpg", 
                category: "Music",
                description: "Haryanvi"
            },
            { 
                name: "Dabangg", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/DABANGG/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/j21NsgJD/dabangg.jpg", 
                category: "Music",
                description: "Bhojpuri"
            },
            { 
                name: "Sangeet Bhojpuri", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1293/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/yYgHbgfn/sangeet-bhojpuri-1.jpg", 
                category: "Music",
                description: "Bhojpuri"
            },
            { 
                name: "Sangeet Marathi", 
                sources: [
                    { name: "Server 1", url: "https://mumt02.tangotv.in/SANGEETMARATHI/index.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_krsl3aXY8SdNBmq2U_JLwb8OsIzHGOR1nbrlaq_h8MvRI=s900-c-k-c0x00ffffff-no-rj", 
                category: "Music",
                description: "Marathi"
            },
            { 
                name: "9X Jhakaas", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/6/master.m3u8" },
                    { name: "Server 2", url: "https://9xjio.wiseplayout.com/9X_Jhakaas/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/0jq4rTv0/9xs-jhakkas.jpg", 
                category: "Music",
                description: "Marathi"
            },
            { 
                name: "Dhoom Music Bangla", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/DHOOM/index.m3u8" },
                    { name: "Server 2", url: "https://cdn-1.pishow.tv/live/1456/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/26RpwgN5/dmb-music.jpg", 
                category: "Music",
                description: "Bangla"
            },
            { 
                name: "Sangeet Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1143/master.m3u8" },
                    { name: "Server 2", url: "https://mumt05.tangotv.in/SANGEETBANGLA/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/NGy2zxLw/sangeet-bangla.jpg", 
                category: "Music",
                description: "Bangla"
            },
            { 
                name: "Bengali Beats", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/tplay/playout/209587/master.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/https://live20.bozztv.com/giatvplayout7/giatv-209587/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.postimg.cc/jSLNzXgM/Bengali-Beats.png", 
                category: "Music",
                description: "Bangla"
            },
            { 
                name: "Ramdhenu", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/RAMDHENU/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/QC6KPQ0X/ramdhenu.jpg", 
                category: "Music",
                description: "Assamese"
            },
            { 
                name: "Tarang Music", 
                sources: [
                    { name: "Server 1", url: "https://livetv.tarangplus.in/tarangmusic-origin/live/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/25rP5nCd/tarang-music.jpg", 
                category: "Music",
                description: "Odia"
            },
            { 
                name: "Ekamra Musiq", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/musiq/musiq/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/vmqxMQvJ/ekamra-music.jpg", 
                category: "Music",
                description: "Odia"
            },
            { 
                name: "Public Music", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/441/master.m3u8" },
                    { name: "Server 2", url: "https://mumbai-edge.smartplaytv.in/publicmusickannada/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3rFEtXJ4KScIt6kwtLeGN-ZwdSiBA4UZJg&s", 
                category: "Music",
                description: "Kannada"
            },
            { 
                name: "Kappa TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1123/master.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/575e7238007c7695a7c2bc5d7b6d0ff9.png", 
                category: "Music",
                description: "Malayalam"
            },
            { 
                name: "Raj Musix Malayalam", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/RAJMUSIXMALAYALAM/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZKDNWTOu4vLY0Wsn1xmHlLPjnpgQQtIT6Q&s", 
                category: "Music",
                description: "Malayalam"
            },
            { 
                name: "Raj Musix Telugu", 
                sources: [
                    { name: "Server 1", url: "https://cdn-1.pishow.tv/live/1213/master.m3u8" },
                    { name: "Server 2", url: "https://mumt02.tangotv.in/RAJMUSIXTELUGU/index.m3u8" },
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/Raj-Musi-Telugu_TV_white.png", 
                category: "Music",
                description: "Telugu"
            },
            { 
                name: "Kalaignar Murasu", 
                sources: [
                    { name: "Server 1", url: "https://yuppmedtaorire.akamaized.net/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/murasu_nim_https/050522/murasu/playlist.m3u8" },
                    { name: "Server 2", url: "https://segment.yuppcdn.net/050522/murasu/playlist.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/QQBHnrVMU6Ex_Y1s64zndprXIJX4uhCh8OUwq1sfgrp3MENL1zR1KP1Adv0aXX3f-yK0uCP15A=s900-c-k-c0x00ffffff-no-rj", 
                category: "Music",
                description: "Tamil"
            },
            { 
                name: "Jaya Max", 
                sources: [
                    { name: "Server 1", url: "https://satoshi-cors.herokuapp.com/http://45.148.145.57/IN_D2HJAYAMOVIE/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/2160e45255960cfbacc217bfe5ec63d4.png", 
                category: "Music",
                description: "Tamil"
            },
            { 
                name: "7S Music", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/7SMUSIC/index.m3u8" },
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/a/ac/76_Tamil_channel.jpeg/revision/latest?cb=20191225165506", 
                category: "Music",
                description: "Tamil"
            },
            { 
                name: "Oxygen Music", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/tplay/playout/209901/master.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-209901/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.postimg.cc/8z1kS0G5/Oxygen-Music.jpg", 
                category: "Music",
                description: "Asia"
            },
            { 
                name: "VEVO", 
                sources: [
                    { name: "Server 1", url: "https://amg00056-amg00056c9-rakuten-fr-3243.playouts.now.amagi.tv/playlist/amg00056-vevotvfast-vevopopfr-rakutenfr/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/65xcYwPj/vevo-music.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "Deluxe Music", 
                sources: [
                    { name: "Server 1", url: "https://sdn-global-live-streaming-packager-cache.3qsdn.com/13456/13456_264_live.m3u8" }
                ], 
                img: "https://i.postimg.cc/9F9d3TyJ/d-music.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "K Pop", 
                sources: [
                    { name: "Server 1", url: "https://live20.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/wMrpYMsN/kpop-music.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "24hr K Pop", 
                sources: [
                    { name: "Server 1", url: "https://live20.bozztv.com/akamaissh101/ssh101/24hrkpoptv/chunks.m3u8" }
                ], 
                img: "https://i.postimg.cc/4NSw2Y26/24h-kpop.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "K-POP by CJ ENM", 
                sources: [
                    { name: "Server 1", url: "https://cc-s23bl4el34qh7.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-s23bl4el34qh7/f4acc9ba_daae_4ed0_b836_32126cead919/hls/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/sx6FN3qq/kpop-cj.jpg", 
                category: "Music",
                description: "World"
            },
            { 
                name: "24/7 Bollywood Movies", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/movies/bollywood-movies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/HsvPf09Y/bollywood.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "24/7 Bollywood Movies 2", 
                sources: [
                    { name: "Playlist", url: "https://vods2.aynaott.com/hindimovies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/HsvPf09Y/bollywood.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "24/7 Dubbed Movies", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/movies/dubbed-movies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/DZmhKfbK/dubbed.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "24/7 Bangla Movies", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/movies/bangla-movies/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/7YR2vbGk/bm.jpg", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Jalsha Movies", 
                sources: [
                    { name: "Playlist", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/JALSHAMOVIESHD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://www.indiantvinfo.com/media/2022/12/Jalsha-Movies-Logo.png", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Colors Bangla Cinema", 
                sources: [
                    { name: "Playlist", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/COLORSBANGLACINEMA/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Colors_Bangla_Cinema.png", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Cine Jomjomat", 
                sources: [
                    { name: "Playlist", url: "https://amg13779-amg13779c1-amgplt0173.playout.now3.amagi.tv/playlist/amg13779-amg13779c1-amgplt0173/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/sxWcXTg4/cj.jpg", 
                category: "Movie",
                description: "Bengali"
            },
            { 
                name: "Zee Bangla Sonar", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebanglacinema/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "fbbfd9ce4bbe4d818b16df7dfe89f05b",
                            key: "1e96d0f88ef740e982d6f6105721c8bc"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/GmzS2s5Y/zbs.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Thirai", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeThi)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "bd7282e920e5437a9b1f01bc6f81795c",
                            key: "99763370f0763b0f7119aab091cc70c8"
                        }
                    }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKupv9Pff-n6hztryy-Es9h8SCXlxvtmFp4w&s", 
                category: "Movie",
                description: "Tamil Kollywood movies"
            },
            { 
                name: "ZEE Cinemalu", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeecinemalu/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "d27bc072600d431faa7d0c8441a5fb43",
                            key: "3b61f64edc79497d9da31d612a88f8ea"
                        }
                    }
                ], 
                img: "https://jiotv.catchup.cdn.jio.com/dare_images/images/Zee_Cinemalu.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Bollywood", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebollywood/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "e61523260c614746b25b9a5523fe9a39",
                            key: "72ddbf37f76f49acbb8e140e7279e7a1"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/DzCBJpYs/z-bollywood.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Bolly World", 
                sources: [
                    { name: "Playlist", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6640" },
                ], 
                img: "https://www.zeetvusa.com/wp-content/uploads/2020/07/zbollyworld-new-332-03.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Cine Classic", 
                sources: [
                    { name: "Playlist", url: "https://amg00862-amg00862c8-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c8-amgplt0173/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/fLtknF8d/zcc.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "Zee Action", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeaction/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "9d7a1917ee3244d198193cdd1ff1feae",
                            key: "3c3e8d0259f748f1830f713a769760e7"
                        }
                    }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/7909a3977e9d8588d73ccc3653d50bde.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee South Flix", 
                sources: [
                    { name: "Playlist", url: "https://amg00862-amg00862c9-amgplt0173.playout.now3.amagi.tv/playlist/amg00862-amg00862c9-amgplt0173/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/JhBW1LCf/zsf.jpg", 
                category: "Movie",
                description: "Hindi"
            },
            { 
                name: "Zee Cinema", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeecinema/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "43513b13f4b542e39c9265921dfc1726",
                            key: "b0b2678bcd274c37b888a6c987d502ed"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/k47QtjRg/zc.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Zee Cinema HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeecinemahd/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "f56beaac9f124616872c741c9ce4fa4e",
                            key: "5d40a903238f4ad98abbed1877d4e3d1"
                        }
                    }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/d61eef03af878ccecfe169b26b6686b0.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "& Pictures", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andpictures/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "8dea532cabfe4f71ba20f62310e7949f",
                            key: "7a214a974e4f4d1d9bb66364d5f0cb92"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/g22ZV7bZ/pictures.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "& Pictures HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andpictureshd/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "de8045e9f0fb4d03845dcc4a8bd7712a",
                            key: "6807bd09bda34ada83152908192af6d6"
                        }
                    }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/e8db0bf2b23a55d582824b2d6a955f24.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Goldmines", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/1459/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/VLCpyP4j/pishow-1459.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Goldmines Movies", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/1461/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/d66J-MMZ06-55gkF5maclPGB5f5j1L0SAs3iWnl3lhoswlWrJ67wD2a3mZGkgHgt-W3kMrIT=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Goldmines Bollywood", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/GOLDMINESBOLLYWOOD/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/BMAiZnOGPMbMXWFW-lYwgp1-qJD6iPbBtB6YS3Kyr9lPM1jlegCl83vHjyasFEjPJrBYAsaeLQ=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Star Gold", 
                sources: [
                    { name: "Stream 1", url: "https://mrzplayin.fun/roarzon/stream.php?id=3eef0c9777e4ffc85045bb13ffbf12fb&e=.m3u8" },
                    { name: "Stream 2", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/stargold/index.m3u8" },
                    { name: "Stream 3", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/STARGOLDHD/tracks-v1a1/mono.m3u8" },
                    { name: "Stream 4", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/stargold/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/7YJXRsp7/gold.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Colors Cineplex", 
                sources: [
                    { name: "Stream 1", url: "https://padmaonline.duckdns.org:8088/ColorsCineplexHD/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/2956db8b77b0f99d5d7d35634f1543bd.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Sony Max", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/SonyMaxHD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYMAXHD/tracks-v1a1/mono.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/sonymax/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Z55d92mk/sony-max.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Sony Max 2", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/sony-max-2/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/DyM2gMGR/max2.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Anoml Cinema", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeanmolcinema/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "812411cba8bc42c79eb2b19cd78ad3f3",
                            key: "468a0b8d3d5d42d8a5c41bb875390a74"
                        }
                    }
                ], 
                img: "https://yt3.googleusercontent.com/vsUsDAS7eY-c-wMy640Se_420J32aYJ-s2Ma_j1TgmZn_Lfw6ZCYTuy-vj1vSO4d3-A_NIz2EGw=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Bollywood HD", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-hd/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/xCNC6b26/Bollywood-HD.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Bollywood Classic", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-classic/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/13Sq4MQs/Bollywood-Classic.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Shemaroo Bollywood", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-bollywood/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/0NW9N0WT/Shemaroo-Bollywood.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Shemaroo Josh", 
                sources: [
                    { name: "Server 1", url: "https://airtelapp.shemaroo.com/shemarooChumbakTV/smil:shemarooChumbakTVadp.smil/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/pVJvTYkj/Shemaroo-josh.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "NH BollyFlix", 
                sources: [
                    { name: "Server 1", url: "https://cc-r5hupcym5oehh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-r5hupcym5oehh/SBUM/RunnTV/BollyFlix_IN/BollyFlix_IN.m3u8" },
                ], 
                img: "https://i.postimg.cc/DfH3xWQ4/nh-bolly-flix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "South Station", 
                sources: [
                    { name: "Server 1", url: "https://cc-yw7ztecy8do3q.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-yw7ztecy8do3q/SS_IN.m3u8" },
                ], 
                img: "https://i.postimg.cc/FF8V2XHs/ss.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "The Movie Club", 
                sources: [
                    { name: "Server 1", url: "https://sis-global.prod.samsungtv.plus/v1/tvpprd/sc-mp2ar4ca425xo.m3u8" },
                ], 
                img: "https://i.postimg.cc/bvZJXWvK/tmc.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "All Time Movies", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/ALLTIMEMOVIES/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/U4INXhwmEUOABHoemQBpI6C9t4jb9iBmDvZ3ZT3lAb9Au_jVl32NL8XDpy-9cBjRJ2LP69Ovzg=s160-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Anoml Cinema", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeanmolcinema/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "812411cba8bc42c79eb2b19cd78ad3f3",
                            key: "468a0b8d3d5d42d8a5c41bb875390a74"
                        }
                    }
                ], 
                img: "https://yt3.googleusercontent.com/vsUsDAS7eY-c-wMy640Se_420J32aYJ-s2Ma_j1TgmZn_Lfw6ZCYTuy-vj1vSO4d3-A_NIz2EGw=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Pitaara", 
                sources: [
                    { name: "Server 1", url: "https://vg-pitaaratvlive.akamaized.net/ptnr-WatchO/title-PitaaraTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-583798/playlist.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/9e8ecfbe919c4262f25a3019aa5aac26.png", 
                category: "Movie",
                description: "Punjabi"
            },
            { 
                name: "Manoranjan Movies", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/228/master.m3u8" },
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Manoranjan-Movies-Logo.jpg", 
                category: "Movie",
                description: "Punjabi"
            },
            { 
                name: "Maha Movie", 
                sources: [
                    { name: "Server 1", url: "https://cdn-6.pishow.tv/live/10007/master.m3u8" },
                ], 
                img: "https://jiotv.catchup.cdn.jio.com/dare_images/images/Maha_Movies.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Filmax", 
                sources: [
                    { name: "Server 1", url: "https://s3.ideationtec.live/Filmax/Filmax.m3u8" },
                ], 
                img: "https://i.postimg.cc/TP8mSJ9y/film-max.jpg", 
                category: "Movie",
                description: "Pakistan"
            },
            { 
                name: "Bflix Movies", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/BFLIX/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTkXKNjwMTBzeEt-5U9Erf0U0lAPhDDzmkw&s", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Dhamaka Movies B4U", 
                sources: [
                    { name: "Server 1", url: "https://cdn-1.pishow.tv/live/235/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/_tSeyztRLJDo4VLxV0xnOFgldKnd7cslKmy7C2voLGri6RMWc_IgHrRf_RGXD3OpeHX4pBxD_g=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Movies", 
                sources: [
                    { name: "Server 1", url: "https://amg00877-b4unew-amg00877c2-xiaomi-in-5489.playouts.now.amagi.tv/playlist.m3u8" },
                    { name: "Server 2", url: "https://mumt02.tangotv.in/B4UMOVIES/index.m3u8" },
                    { name: "Server 3", url: "https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/tgwF8wQJ/B4-U-Movies.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Kadak", 
                sources: [
                    { name: "Server 1", url: "https://amg00877-b4unew-amg00877c4-xiaomi-in-5473.playouts.now.amagi.tv/playlist.m3u8" },
                    { name: "Server 2", url: "https://mumt02.tangotv.in/B4UKADAK/index.m3u8" },
                    { name: "Server 3", url: "https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/zvnwCjQB/B4-U-Kadak.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Bhojpuri", 
                sources: [
                    { name: "Server 1", url: "https://mumt05.tangotv.in/B4UBHOJPURI/index.m3u8" },
                    { name: "Server 2", url: "https://cdnb4u.wiseplayout.com/B4U_Bhojpuri/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/CxJNrcxn/B4-U-Bhojpuri.png", 
                category: "Movie",
                description: "Bhojpuri"
            },
            { 
                name: "Filamchi Bhojpuri", 
                sources: [
                    { name: "Server 1", url: "https://epiconvh.akamaized.net/live/filamchi/master.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/shows/2025-10-31/2510313384016.jpg", 
                category: "Movie",
                description: "Bhojpuri"
            },
            { 
                name: "Bhojpuri Cinema", 
                sources: [
                    { name: "Server 1", url: "https://live-bhojpuri.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/1z2YMvvc/Bhojpuri-Cinema.png", 
                category: "Movie",
                description: "Bhojpuri"
            },
            { 
                name: "Oscar Movies", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/233/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/3q7hOZZ13Ctb2sYwZ8DlCn23p8YypdoYv0YSl41VAfhjCSsol-rGM4eOhjhre8I8f6adk95WWGg=s900-c-k-c0x00ffffff-no-rj", 
                category: "Movie",
                description: "Bhojpuri"
            },
            { 
                name: "Movieplex", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/MOVIEPLEX/index.m3u8" },
                ], 
                img: "https://www.lyngsat.com/logo/tv/mm/movieplex-in.png", 
                category: "Movie",
                description: "Bhojpuri"
            },
            { 
                name: "MH1 Movies", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/MHONEMOVIE/index.m3u8" },
                ], 
                img: "https://www.lyngsat.com/logo/tv/mm/mh-1-movies-in.png", 
                category: "Movie",
                description: "Punjabi/Bhojpuri"
            },
            { 
                name: "Ekamra Cinema", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/cynema/cynema/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/LsghdGxj/ekamra-cinema.jpg", 
                category: "Movie",
                description: "Odia"
            },
            { 
                name: "Ekamra Baiscope", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/baiscope/baiscope/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/bvyDnGv4/baiscope.jpg", 
                category: "Movie",
                description: "Odia"
            },
            { 
                name: "Public Movies", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/PUBLICMOVIES/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/5aabe347098d412536655472bd144e6a.png", 
                category: "Movie",
                description: "Kannada"
            },
            { 
                name: "ETV Cinema", 
                sources: [
                    { name: "Server 1", url: "https://d1q7j6ha51ro6f.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_CINEMA_H264-3_cloud_in/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/8291f351a574d7886d602ba6d86b825e.png", 
                category: "Movie",
                description: "Telugu"
            },
            { 
                name: "Zee BollyMovies", 
                sources: [
                    { name: "Server 1", url: "https://amg17931-zee-amg17931c8-samsung-th-6526.playouts.now.amagi.tv/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/pTPpbML6/zee-bollymovies.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Star Movies", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/StarMoviesHD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/STARMOVIESHD/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/STAR_Movies_logo.svg/250px-STAR_Movies_logo.svg.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "& Flix", 
                sources: [
                    { name: "Server 1", url: "https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/chunklist_b996000.m3u8" },
                ], 
                img: "https://i.postimg.cc/NfBgbv0y/flix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Romedy Now", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "40f019b86241d23ef075633fd7f1e927",
                            key: "058dec845bd340178a388edd104a015e"
                        }
                    }
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/timesplay/content/common/logos/channel/logos/nchght.jpeg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Movies Now HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "40f019b86241d23ef075633fd7f1e927",
                            key: "058dec845bd340178a388edd104a015e"
                        }
                    }
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/timesplay/content/common/logos/channel/logos/wthfwe.jpeg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "MNX HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "40f019b86241d23ef075633fd7f1e927",
                            key: "058dec845bd340178a388edd104a015e"
                        }
                    }
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/timesplay/content/common/logos/channel/logos/vunjev.jpeg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "MN+", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "40f019b86241d23ef075633fd7f1e927",
                            key: "058dec845bd340178a388edd104a015e"
                        }
                    }
                ], 
                img: "https://d229kpbsb5jevy.cloudfront.net/timesplay/content/common/logos/channel/logos/leazcc.jpeg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "Starz 1", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://live-crave.video.9c9media.com/59c2df870a1e8c5b14c4f5ed7e951e1cef9474581754944303887/fe/f/crave/starz1/manifest.mpd?u=li",
                        type: "dash",
                        drm: {
                            kid: "5ebcf53fd1794237aa02af52413e0c2a",
                            key: "bd2f5d20887507da6f26401b1d95aeee"
                        }
                    }
                ], 
                img: "https://img.utdstc.com/icon/9d8/186/9d8186272082392409f8604d3499e2a3f6dc6a98acbc7bcc8a2c2f6ec435cec8:200", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Starz 2", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://live-crave.video.9c9media.com/65a655714b62d8c989ad80dc30e3035b0bfb65b41754945004845/fe/f/crave/starz2/manifest.mpd?u=li",
                        type: "dash",
                        drm: {
                            kid: "5389bf9aa04e467aac818fac7138f8f4",
                            key: "ebb8e28d9081a462015de790e76759f0"
                        }
                    }
                ], 
                img: "https://img.utdstc.com/icon/9d8/186/9d8186272082392409f8604d3499e2a3f6dc6a98acbc7bcc8a2c2f6ec435cec8:200", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Sony Pix", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/sony-pix-hd/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYPIXHD/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://i.postimg.cc/tggwMqHB/pix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "MIX Hollywood", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-hwc.myco.io/MixTV/hls/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/KvFqjytv/mix-h.jpg", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Movies Action", 
                sources: [
                    { name: "Server 1", url: "https://shls-live-enc.edgenextcdn.net/out/v1/46079e838e65490c8299f902a7731168/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/FzGVRR9P/movies-action.jpg", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Movies Thriller", 
                sources: [
                    { name: "Server 1", url: "https://shls-live-enc.edgenextcdn.net/out/v1/f6d718e841f8442f8374de47f18c93a7/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/63rhkcgD/movies-thriller.jpg", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Superfine Films", 
                sources: [
                    { name: "Playlist", url: "https://supflm.cdn.runn.tv/runntv/stream/p_supjio/playlist.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/shows/epgdata/a5f8b8d698133ad07c19b5c7a56a7de6.png?width=300", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "TG Movies", 
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=286" },
                ], 
                img: "https://img1.static-ottera.com/prod/tg/linear_channel/logo/480x270/tg-movies-1920-x-1080_1.jpg", 
                category: "Movie",
                description: "Kids Movies"
            },
            { 
                name: "Movie Box", 
                sources: [
                    { name: "Server 1", url: "https://live20.bozztv.com/giatvplayout7/giatv-210731/tracks-v1a1/mono.ts.m3u8" },
                ], 
                img: "https://i.postimg.cc/xdVgw5yG/movie-box.png", 
                category: "Movie",
                description: "Asia"
            },
            { 
                name: "Lotus Macau", 
                sources: [
                    { name: "Server 1", url: "https://cdn.skygo.mn/live/disk1/Lotus/HLSv3-FTA/Lotus.m3u8" },
                ], 
                img: "https://i.postimg.cc/6q0JD7ZB/lotus-macau.png", 
                category: "Movie",
                description: "China"
            },
            { 
                name: "Best Action", 
                sources: [
                    { name: "Best-Action", url: "https://streams2.sofast.tv/ptnr-yupptv/title-BEST_ACTION_YUPPTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/9a4a5412-ca99-48d3-9013-d1811b95b9d2/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/ncHCB2vs/best-action.png", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Star Jalsha", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/StarJalshaHD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/starjalsha/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://tvn1.chowdhury-shaheb.com/starjalsha/index.m3u8" },
                    { name: "Server 4", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/STARJALSHAHD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/WpQ9PsZ3/star-jalsha.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Zee Bangla", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeebangla/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "1df83e058b864da896c9288eef63b113",
                            key: "fc32f26239054b56aab48225305598fe"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/wj9Q6Mj6/zee-bangla.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Colors Bangla", 
                sources: [
                    { name: "Server 1", url: "https://tvsen3.aynaott.com/u3LkNQ7UHhFX/index.m3u8" },
                    { name: "Server 2", url: "https://padmaonline.duckdns.org:8088/ColorsBanglaHD/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/vTQZ4Jg6/colors-bangla.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Sun Bangla", 
                sources: [
                    { name: "Server 1", url: "https://smart.bengaldigital.live/sun-bangla-paid/tracks-v1a1/mono.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SUNBANGLAHD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/Yqvwd2HC/sun-bangla.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Enterr10 Bangla", 
                sources: [
                    { name: "Server 1", url: "https://live-bangla.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/50rsyVks/enter10-bangla.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Ruposhi Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1039/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/8c1LTnTZ/ruposhi-bangla.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "DD Bangla", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/jJxkTYCjjCHI1_OB6NK8G1n4vu-EIOj8gaPTxbnFA9tO_jkWJdCfUZy23fVCQtthdW9Nf8Et=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Khushboo Bangla", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/1473/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/brJdCXyf/khushboo-bangla.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Sony Aath", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/SonyAath/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYAAT/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/y8WtVLd6/sony-aath.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Akash Aath", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/AAKASHAATH/index.m3u8" },
                    { name: "Server 2", url: "https://cdn-4.pishow.tv/live/969/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/WzkcbSSJ/akash-aath.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "R Plus Gold", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/RPLUSGOLD/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/fbWdLj4y/rplusgold.jpg", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Tara TV", 
                sources: [
                    { name: "Server 1", url: "https://legitpro.co.in/taratv/taratv/index.m3u8" },
                    { name: "Server 2", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/tara-tv/index.m3u8?ads.vf=G9BFeQBhLSm" }
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_njjooSlwTJnKdIZCGueYfSfotEcv0VLNzeeX8C_3735g=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Bangla"
            },
            { 
                name: "Rang TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/RANG/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/0a5c79b522b0934ea9b2806dd9b8339f.png", 
                category: "Entertainment",
                description: "Assamese"
            },
            { 
                name: "Rengoni", 
                sources: [
                    { name: "Server 1", url: "https://mumt05.tangotv.in/RENGONI/index.m3u8" }
                ], 
                img: "https://pbs.twimg.com/profile_images/880366209404776451/d8zE7-fu.jpg", 
                category: "Entertainment",
                description: "Assamese"
            },
            { 
                name: "Pear TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/PEARTV/index.m3u8" }
                ], 
                img: "https://www.lyngsat.com/logo/tv/pp/pear-tv-in.png", 
                category: "Entertainment",
                description: "Assamese"
            },
            { 
                name: "Star Plus", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/StarPlusHD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/STARPLUSHD/tracks-v1a1/mono.m3u8" },
                    
                ], 
                img: "https://i.postimg.cc/htNZQ0x0/Star-Plus.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Star Bharat", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://217.20.112.199:8888/lifeokhd/index.m3u8" },
                    
                ], 
                img: "https://i.postimg.cc/W176T68d/Star-Bharat.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Zee TV", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeetv/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "ed068cf84f0640ccbc7c0e395c0a272e",
                            key: "bb722190f2bb446391020411a7d0828b"
                        }
                    }
                ], 
                img: "https://preview.redd.it/zee-tv-new-logo-v0-rdavl0od4j5f1.jpeg?auto=webp&s=23fc180397ed9368e1b7e637e5c6a6d350647b1f", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Zee TV HD", 
                sources: [
                    { 
                        name: "HD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeetvhd/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "65c3633157574361b191059e46e72968",
                            key: "78450b11381340c297d96c13183d3744"
                        }
                    }
                ], 
                img: "https://yt3.googleusercontent.com/yawyROd5jQqRiXHdmttib1ZhZTZ_flA4ACjPpNNdrVFC_J8NWmrlI-Se97YMaCJSvId4s7eV=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "& TV", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andtv/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "26df86eeebb04d7fbc45c948f76e81fd",
                            key: "5f3a23f1a73c4c96ababce5fffe7b06b"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/MHqdfgbZ/tv.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "& TV HD", 
                sources: [
                    { 
                        name: "HD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Andtvhd/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "67d18634ccb04875875c60fb8d9caaba",
                            key: "99a66471c09e4b8a8dc39a0de6803f75"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/xTjxKHqG/tvhd.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Anmol TV", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeeanmol/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "4023613457774cbeb71a62c339970e63",
                            key: "1c3e9fce5f014542be9cd1f749181204"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/Jnd9k7Cy/anmol-tv.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Zing", 
                sources: [
                    { 
                        name: "SD", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zing/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "f0fb14eebe474a6ab74c8301d55a7224",
                            key: "f9f8b2e30704458b8db844a285ce32be"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/cCn5tQc5/zing.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Big Magic", 
                sources: [
                    { name: "Server 1", url: "https://mumt05.tangotv.in/BIGMAGIC/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshxArWWUTWYmwlcIZGhOXbTw5GraQkf4xjA&s", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Colors", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/ColorsHD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://217.20.112.199:8888/ColorsHD/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/colors/index.m3u8" },
                    { name: "Server 4", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/COLORSHD/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://i.postimg.cc/vBL4YjR8/colors.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Sony Sab", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/sony-sab-hd/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://217.20.112.199:8888/sabtvhd/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://tigerhub-bd.vercel.app/SONY/Sab/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 4", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/sonysab/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/kMQ4KLhT/sab.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Sony Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/SETHD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/sethd/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYENTHD/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://i.postimg.cc/ydq1SThV/set.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "DD National", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/PrVcPf1R/DD-National.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Shemaroo TV", 
                sources: [
                    { name: "Server 1", url: "https://airtelapp.shemaroo.com/shemarootv/smil:shemarootvadp.smil/playlist.m3u8" },
                    { name: "Server 2", url: "https://mumt02.tangotv.in/SHEMAROOTV/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/fe2abb2de6b079ea2e97ba2902b903fb.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Shemaroo Umang", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/SHEMAROOUMANG/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/shows/epgdata/e374d0166e26360d753d5b9bb631ed78.png?width=300", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Dangal", 
                sources: [
                    { name: "Server 1", url: "https://live-dangal.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/Hk2rQKsR/Dangal.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Dangal 2", 
                sources: [
                    { name: "Server 1", url: "https://live-dangal2.akamaized.net/liveabr/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/HWyjSjkQ/Dangal-2.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Abzy Dhakad", 
                sources: [
                    { name: "Server 1", url: "https://d2lk5u59tns74c.cloudfront.net/out/v1/4fe6ab07a13543d6bdb2ec63b3e2df44/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/Yq9H0sLb/Abzy-Dhakad.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Fakt Marathi", 
                sources: [
                    { name: "Server 1", url: "https://cdn-6.pishow.tv/live/10002/master.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/87bc6f3984109dd5ef35e2e4fb1b64cb.png", 
                category: "Entertainment",
                description: "Marathi"
            },
            { 
                name: "Sony Marathi", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/sonymarathi/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wRjk798Ys8XdOzogPeYLsXGPP4w_8KZEXA&s", 
                category: "Entertainment",
                description: "Marathi"
            },
            { 
                name: "Colors Marathi", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/ColorsMarathi/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/R0PJ5d59/colors-marathi.jpg", 
                category: "Entertainment",
                description: "Marathi"
            },     
            { 
                name: "Shemaroo MarathiBana", 
                sources: [
                    { name: "Server 1", url: "https://airtelapp.shemaroo.com/marathibana/smil:marathibanaadp.smil/playlist.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/4db56a487bc1edcd7438e667b6a46284.png", 
                category: "Entertainment",
                description: "Marathi"
            },   
            { 
                name: "Peppers", 
                sources: [
                    { name: "Server 1", url: "https://d1msejlow1t3l4.cloudfront.net/fta/peppers/chunks.m3u8" },
                    { name: "Server 2", url: "https://cdn-2.pishow.tv/live/1383/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_lRqWi7GK5UoOeKQs1hPj38bMyqPBwEo35pwDVGaw3Qbqs=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Tamil"
            },
            { 
                name: "Zee Tamil", 
                sources: [
                    { 
                        name: "HD", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(ZeeTamil)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "06e1831ba6f946568bdea62e67ca7317",
                            key: "f02c40d2006e036104f7726116861d7c"
                        }
                    }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAQ8QqR_jJq1z3OK7yqDPRTixOPnGVbF-Zg&s", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Sun TV", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/suntv/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/G3PrLGk2/suntv.jpg", 
                category: "Entertainment",
                description: "Tamil"
            },
            { 
                name: "MK Six", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1253/master.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/155bad426a169fdc4ba921c24c2af420.png", 
                category: "Entertainment",
                description: "Tamil"
            },
            { 
                name: "Shalini TV", 
                sources: [
                    { name: "Server 1", url: "https://stream.singamcloud.in/shalinitv/shalinitv/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/oq4TNLaYR0tvJypHi2VH_wWn8MN2MijcMA0lJ3lSYAKn6ce8RjFPJYL_2eTygF18m8nOqcMN=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Tamil"
            },   
            { 
                name: "Thanthi One", 
                sources: [
                    { name: "Server 1", url: "https://mumt02.tangotv.in/THANTHIONE/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/bcea7fce3598bc29fd4db2d2ba6d22f7.png", 
                category: "Entertainment",
                description: "Tamil"
            },   
            { 
                name: "Brio TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt02.tangotv.in/BRIOTV/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PS3pMceApdbIKsTzMIxPorDNQHAqW2YgdQ&s", 
                category: "Entertainment",
                description: "Tamil"
            },
            { 
                name: "ZEE Telugu", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Zeetelgu/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "1ce5cd75a6ad44a38a7d1b8dbaf9c330",
                            key: "657fc8e7d533456cb0644fe03458a4b2"
                        }
                    }
                ], 
                img: "https://jiotv.catchup.cdn.jio.com/dare_images/images/Zee_Telugu.png", 
                category: "Entertainment",
                description: "Telugu"
            }, 
            { 
                name: "ETV Telugu HD", 
                sources: [
                    { name: "Server 1", url: "https://d2z3q47xzd535o.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_HD_H264-2_cloud_in/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/23c6235eac966a5e93f152e0eb3eefc0.png", 
                category: "Entertainment",
                description: "Telugu"
            },
              { 
                name: "ETV Plus", 
                sources: [
                    { name: "Server 1", url: "https://d27tnkf60df3v4.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_PLUS_H264-3_cloud_in/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/7a20f635d55450d674220f2e37739da3.png", 
                category: "Entertainment",
                description: "Telugu"
            }, 
            { 
                name: "Studio Yuva", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/STUDIOYUVA/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/V-a2CieMvWBWCdM6cUh-UZR4z7t3wEXzmn7Zd3p7MTXPWfXGggTSzNCrS1TXGG_pYqPstlnFOVg=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Telugu"
            }, 
            { 
                name: "Kairali TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/KAIRALI/index.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/ea4af867a91ddeb85fb5990c9be079e5.png", 
                category: "Entertainment",
                description: "Malayalam"
            }, 
            { 
                name: "Kerala Vision", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/KERALAVISION/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysojarYeIH0HE_TtpZgiYAddCCvDS3_CBgA&s", 
                category: "Entertainment",
                description: "Malayalam"
            }, 
            { 
                name: "Asianet", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/asianet/index.m3u8" },
                ], 
                img: "https://www.medianews4u.com/wp-content/uploads/2025/09/Asianet-dominates-Malayalam-TV-with-64-prime-time-share-Bigg-Boss-7-leads-the-charge.png", 
                category: "Entertainment",
                description: "Malayalam"
            },
            { 
                name: "Mazhavil Manorama", 
                sources: [
                    { name: "SD", url: "https://yuppmedtaorire.akamaized.net/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/mazhavilmanorama_nim_https/050522/mazhavilmanorama/playlist.m3u8" },
                    { name: "HD", url: "https://cdn-7.pishow.tv/live/1129/master.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/bcbf005fdbbe3c4c5224827def2387b8.png", 
                category: "Entertainment",
                description: "Malayalam"
            },
            { 
                name: "Siri Kannada All Time", 
                sources: [
                    { name: "Server 1", url: "https://mumt02.tangotv.in/SIRIKANNADAALLTIME/index.m3u8" },
                ], 
                img: "https://www.lyngsat.com/logo/tv/ss/siri-kannada-all-time-in.png", 
                category: "Entertainment",
                description: "Kannada"
            }, 
            { 
                name: "Hum TV", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/HUM_ENTERTAINMENT/tracks-v1a1/mono.ts.m3u8" },
                ], 
                img: "https://i.postimg.cc/NMyGY6FT/hum.jpg", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Ary Digital", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/ARY_DIGITAL/tracks-v1a1/mono.ts.m3u8" },
                ], 
                img: "https://mir-s3-cdn-cf.behance.net/projects/404/90ecb9218167821.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.jpg", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Aaj Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/AAJ_ENTERTAINMENT/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://s2.ideationtec.live/AAJ_Entertainment/AAJ_Entertainment.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/dU-Bp46E2XlBaw376I_Boc-0lTEHgBrFJffOK4g1qQvQW5Ah00qL1IYGfWTYjekh8HibJb7nsQ=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Express Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/EXPRESS_ENTERTAINMENT/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://s3.ideationtec.live/Express_Entertainment/Express_Entertainment.m3u8" },
                ], 
                img: "https://r2.thesportsdb.com/images/media/channel/logo/sswurt1476662766.png", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Green Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/GREEN_ENTERTAINMENT/tracks-v1a1/mono.ts.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOMJrXPGx1YIFBC6ogdcJ87M35xQjneLhKA&s", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Geo Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/GEO_ENTERTAINEMNT/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://s3.ideationtec.live/GEO_Entertainment/GEO_Entertainment.m3u8" },
                ], 
                img: "https://i.postimg.cc/GpLH0TvJ/geo-ent.jpg", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Bol Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/BOL_ENTERTAINMENT/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://s2.ideationtec.live/BOL_Entertainment_HD/BOL_Entertainment_HD.m3u8" },
                ], 
                img: "https://i.postimg.cc/HstckCdt/bol-ent.jpg", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Sab Entertainment", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/SAB_ENTERTAINMENT/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://s1.ideationtec.live/SAB_Entertainment/SAB_Entertainment.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGE8uyneXAmDlEikCnonDG2YX9SxfvfWnFWg&s", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Mun TV", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/MUN_TV/tracks-v1a1/mono.ts.m3u8" },
                ], 
                img: "https://media.licdn.com/dms/image/v2/D4D0BAQFEQlJZEt9u8w/company-logo_200_200/company-logo_200_200/0/1697180175196?e=2147483647&v=beta&t=_qhFwyXTYEWa5QTTUDI3MwI8aefVr39xDxYKItDNLS0", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "A Plus", 
                sources: [
                    { name: "Server 1", url: "https://s3.ideationtec.live/A_Plus/A_Plus.m3u8" },
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/5/5b/A-Plus_TV_Logo.png", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Aur Life", 
                sources: [
                    { name: "Server 1", url: "https://s3.ideationtec.live/Aur_Life/Aur_Life.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/HuRtbtQKBU0desDRLArEeqjxI5qIhIKTZcaZeh0oO1ynmZM07V9LU5en4Qg5Q2BnImyxpOLE=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "LTN Family HD", 
                sources: [
                    { name: "Server 1", url: "https://s3.ideationtec.live/LTN_Family_HD/LTN_Family_HD.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvVuUYrmyYYivPTlPlj4Zs833NMboieTgiw&s", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "Mehran TV", 
                sources: [
                    { name: "Server 1", url: "https://s2.ideationtec.live/Mehran_TV/Mehran_TV.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/NVrndNv3iCyD8VNX4t9sWCAj-c4iSbUQ9uWYY9zrnEIcQIialwizqgoDeCdO5BkzueGJwuwuKSU=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Pakistan"
            },
            { 
                name: "MIX Bel Araby", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-hwc.myco.io/MixBelAraby/hls/MixBelAraby_H264-1080p.m3u8?pkg_media=video&pkg_hm=index.m3u8&pkg_svc=1&pkg_vcodec=avc1" },
                ], 
                img: "https://media0098.elcinema.com/tvguide/1371_1.png", 
                category: "Entertainment",
                description: "Arabic"
            },
            { 
                name: "Mix One", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-hwc.myco.io/MixONE/hls/MixONE_H264-720p.m3u8?pkg_media=video&pkg_hm=index.m3u8&pkg_svc=1&pkg_vcodec=avc1" },
                ], 
                img: "https://yt3.googleusercontent.com/GNAHhu67wZNeTbEONgZbP-5l0w9qmBNjNcNtXEqg-8fq8UZsqKRmKDqtg5hgmAAph_bAqLfJ=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "Arabic"
            },
            { 
                name: "Bollywood Masala", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-masala/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/d1VDH0pY/Bollywood-Masala.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "24/7 CID Bengali", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/cid-bengali.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nz4WS5nT/cid-bengali.jpg", 
                category: "Entertainment",
                description: "Bengali"
            },
            { 
                name: "24/7 Crime Patrol Bengali", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/crime-patrol-bengali.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/FFSwCT9W/crime-patrol.jpg", 
                category: "Entertainment",
                description: "Bengali"
            },
            { 
                name: "24/7 Humayun Ahmed", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/humayun-ahmed/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mZ7yRY36/ha24-7.jpg", 
                category: "Entertainment",
                description: "Bengali"
            },
            { 
                name: "Hi Dost!", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/HIDOST/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQot7JfQIDygBtPDLKqP4lomWHllkOpnhtrow&s", 
                category: "Mix-Entertainment",
                description: "English/Hindi"
            },
            { 
                name: "Manoranjan TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-1.pishow.tv/live/1013/master.m3u8" }
                ], 
                img: "https://jiotv.catchup.cdn.jio.com/dare_images/images/Manoranjan_TV.png", 
                category: "Mix-Entertainment",
                description: "Hindi"
            },
            { 
                name: "Kaumudy TV", 
                sources: [
                    { name: "Server 1", url: "https://oqgdrkxby4rm-hls-live.5centscdn.com/kaumudytv/live.stream/playlist.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d7wjWkHY_VaaFcpji37s3CZwssMsXSxLZlgvTlgWYzfZBEexD1_f-ocxH0kBZBYitPA&usqp=CAU", 
                category: "Mix-Entertainment",
                description: "Malayalam"
            },
            { 
                name: "Kannur Vision", 
                sources: [
                    { name: "Server 1", url: "https://stream.logichost.in/kannurvision/live/playlist.m3u8" }
                ], 
                img: "https://play-lh.googleusercontent.com/667r12fkQRMAXtdves9sb6D9QRjxNn5gY9UjSNsQkYjAfh_YyIvVwtkt8t0LWujWT7U", 
                category: "Mix-Entertainment",
                description: "Malayalam"
            },
            { 
                name: "Kairali We", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1530/master.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFziJMtfaHaW2j77isHF0VepKF9qs78qCow&s", 
                category: "Mix-Entertainment",
                description: "Malayalam"
            },
            { 
                name: "Darshana TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/DARSHANATV/index.m3u8" }
                ], 
                img: "https://media.licdn.com/dms/image/v2/C560BAQEL49S7MytBgg/company-logo_200_200/company-logo_200_200/0/1637128620818?e=2147483647&v=beta&t=woB6D-yxeJR4Fy-tsMnFG-QyioX4CC52V2WWezMVRwE", 
                category: "Mix-Entertainment",
                description: "Malayalam"
            },
            { 
                name: "Kalaignar TV", 
                sources: [
                    { name: "Server 1", url: "https://segment.yuppcdn.net/240122/kalaignartv/playlist.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/3/3a/Kalaignar_logo.jpg", 
                category: "Mix-Entertainment",
                description: "Tamil"
            },
            { 
                name: "Madhimugam TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1476/master.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/2ba9fac03ad789ed0eac205fad948d12.png", 
                category: "Mix-Entertainment",
                description: "Tamil"
            },
            { 
                name: "Tamilan TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn.zionmediait.com/zionmediaitserver2024/97484f5ce6da96e496a9b87c439835d0.sdp/playlist.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/6c862e3b037757f287141c2d553da1b1.png", 
                category: "Mix-Entertainment",
                description: "Tamil"
            },
            { 
                name: "Malar TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/473/master.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1Uz2UXWDNxARKK2evE0wVMbx-OnqP85IfA&s", 
                category: "Mix-Entertainment",
                description: "Tamil"
            },
            { 
                name: "Vasanth TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/VASANTHTV/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/5761fa88d426be19ba1d457c027d3049.png", 
                category: "Mix-Entertainment",
                description: "Tamil"
            },
            { 
                name: "Vissa TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt02.tangotv.in/VISSATV/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/shows/2026-02-11/260211734018.jpg?width=700", 
                category: "Mix-Entertainment",
                description: "Telugu"
            },
            { 
                name: "Etv Telangana", 
                sources: [
                    { name: "Server 1", url: "https://dssp63pjfajz9.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_TS_H264-3_cloud_in/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/14f02729515b0b48e53c377f47607a9e.png", 
                category: "Mix-Entertainment",
                description: "Telugu"
            },
            { 
                name: "MH1", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/MHONE/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/fa5f35e8773cdb342d0e7c4a8152713e.png", 
                category: "Mix-Entertainment",
                description: "Punjabi/Hindi"
            },
            { 
                name: "MH1 Dil Se", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/MHONEDILSE/index.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/m3UJ83p8sYNsNAJ7lsRelI4UxoF7LLXNWPSrwSGEmdsyhHWo2Q9mv73tyTVW-tp-x8lbZ65f=s900-c-k-c0x00ffffff-no-rj", 
                category: "Mix-Entertainment",
                description: "Punjabi/Bhojpuri"
            },
            { 
                name: "RTV", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/rtv/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/rtv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Qxh9wGTV/rtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Mohona Television", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/bangladesh/mohona.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/vBTXWxQF/mohona.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Desh TV", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/bangladesh/deshtv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/kG5Zpp8y/deshtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Deepto TV", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/deeptotv/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/deeptotv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/m2tN6sc9/deepto-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Green TV", 
                sources: [
                    { name: "Playlist", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8" }
                ], 
                img: "https://media.licdn.com/dms/image/v2/D560BAQHElejP-dKJhg/company-logo_200_200/company-logo_200_200/0/1667384842286/green_tv_digital_logo?e=2147483647&v=beta&t=W0t2EpmzgDhkORaqs2SaZt0-LaRukY7CzF82EmhnAK8", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Boishakhi TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/boishakhitv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/rFWQgTRD/boishakhi.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "SATV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/satv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/02nTdDvr/satv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Bangla TV", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/bangla-tv/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/banglatv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/L4bfq0Ys/bangla-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Ananda TV", 
                sources: [
                    { name: "Playlist", url: "https://edge2.roarzone.info:8447/roarzone/edge3/ananda-tv/index.m3u8" },
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/anandatv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/tJZFsRyZ/anandatv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Bijoy TV", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/bijoy-tv/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/bijoytv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/sggs7Tv2/bijoytv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Asian TV", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/asian-tv/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/asiantv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/021TdcXS/asian.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Nexus TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/nexustv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nLFqtbRY/nexustv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Channel 9", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/bangladesh/channel9.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/76Xhyb76/channel-9.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Channel i", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/channel-i/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/CHANNELI/tracks-v1a1/mono.m3u8" },
                    { name: "Server 3", url: "https://tplay.live/out/bangladesh/channeli.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/4NzjyVPN/channel-i.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Banglavision", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/banglavision/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/PJxGv57P/banglavision.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "ATN Bangla", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/ATNBANGLA/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/BbLck5F4/atn-bangla.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Channel S", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/channel-s/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/channels.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/nL8s287H/channel-s.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Ekushey ETV", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/ekusheytv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/c4f9c3vr/ekusheetv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Global TV", 
                sources: [
                    { name: "Server 1", url: "https://edge2.roarzone.info:8447/roarzone/edge3/global-tv/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/globaltv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/SKncg0gg/globaltv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Maasranga", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/maasranga.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/h41QbPKw/maasranga.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "SRK TV", 
                sources: [
                    { name: "Playlist", url: "https://srknowapp.ncare.live/srktvhlswodrm/srktv.stream/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/HWEDk9BVcD7TT3VpzVdkVqJkLkyi7WRq7KduIaFdb-y5Bh7mZdfD3A8yxCFsz7OHcubTZv21=s900-c-k-c0x00ffffff-no-rj", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Nagorik TV", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/NagorikTV/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/NAGORIK/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Logo_of_Nagorik_TV.svg/250px-Logo_of_Nagorik_TV.svg.png", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },            { 
                name: "GTV", 
                sources: [
                  
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/GaziTV/index.m3u8" },
                    { name: "Server 2", url: "https://satoshi-cors.herokuapp.com/http://tvn2.chowdhury-shaheb.com/gazitv/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/yNLC1Rfw/gtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "My TV", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/out/bangladesh/mytv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/k4cM8GWx/mytv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "NTV", 
                sources: [
                    { name: "Server 1", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/bangladesh/ntv.index.m3u8" }
                ], 
                img: "https://i.postimg.cc/xjZDZLjt/ntvbd.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Deshe Bideshe", 
                sources: [
                    { name: "Server 1", url: "https://dbcanada.sonarbanglatv.com/deshebideshe/dbtv/index.m3u8" },
                ], 
                img: "https://timetvplus.com/uploads/tv_image/deshe-bideshe-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Bongo Drama", 
                sources: [
                    { name: "Server 1", url: "https://streams2.sofast.tv/ptnr-runntv/title-Bongo_Drama/sofastplayout/restream/6509864e-6447-4085-9053-c643734bbc1c/master.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/-WoL9dA-we7-4A1cWu_SHjzRl7e0_sdMrr-lFrznSAIyn__k7Hs89hvW8jV3_DpYP9PzjBQikw=s900-c-k-c0x00ffffff-no-rj", 
                category: "Mix-Entertainment",
                description: "Bengali"
            },
            { 
                name: "Dainik Asha", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/da/da/video.m3u8" },
                ], 
                img: "https://i.postimg.cc/cCVQWsdJ/dainikasha.jpg", 
                category: "Mix-Entertainment",
                description: "Odia"
            },
            { 
                name: "1 Paschima", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/onepaschima/onepaschima/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/h4ZjjSNG/onepaschima.jpg", 
                category: "Mix-Entertainment",
                description: "Odia"
            },
            { 
                name: "Ekamra Nilachakra", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/nilachakra/nilachakra/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/JnjqhDdG/ekamra-nilachakra.jpg", 
                category: "Mix-Entertainment",
                description: "Odia"
            },
            { 
                name: "Ekamra Manoranjan", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/manoranjan/manoranjan/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/26F0w9Rt/ekamra-manoranjan.jpg", 
                category: "Mix-Entertainment",
                description: "Odia"
            },
            { 
                name: "Ekamra Jatra", 
                sources: [
                    { name: "Server 1", url: "https://live.ekamraott.com/jatra/jatra/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/FK6Wzkbn/ekamra-jatra.jpg", 
                category: "Mix-Entertainment",
                description: "Odia"
            },
            { 
                name: "STV", 
                sources: [
                    { name: "Server 1", url: "https://amigofx.com:1936/stv/stv/playlist.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT9jZUmc4W3Ir5GzczUlT0nuGJemYEecUhA&s", 
                category: "Mix-Entertainment",
                description: "Odia"
            },
            { 
                name: "Kuwait TV", 
                sources: [
                    { name: "Arabic", url: "https://cdn-globecast.akamaized.net/live/eds/kuwait_tv1/hls_roku/index.m3u8" },
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/KuwaitTV.svg/250px-KuwaitTV.svg.png", 
                category: "Mix-Entertainment",
                description: "Kuwait"
            },
            { 
                name: "Oman TV", 
                sources: [
                    { name: "Arabic", url: "https://cdn-globecast.akamaized.net/live/eds/oman_tv/hls_roku/index.m3u8" },
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Saghhjjdegh.jpg", 
                category: "Mix-Entertainment",
                description: "Sultanate of Oman"
            },
            { 
                name: "Sudan TV", 
                sources: [
                    { name: "Arabic", url: "https://cdn-globecast.akamaized.net/live/eds/sudan_tv/hls_roku/index.m3u8" },
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/c/cc/Sudan_TV_logo_2000.png", 
                category: "Mix-Entertainment",
                description: "Sudan"
            },
            { 
                name: "Miami TV Fashion", 
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=16283" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-_x4R5nZ7pvTIvA2oMe2OYHORoTytxVMqw&s", 
                category: "Fashion",
                description: "World"
            },
            { 
                name: "Live 1", 
                sources: [
                    { name: "Server 1", url: "https://mix.drmlive.net/mix/playboxtv.m3u8?id=830835320" },
                    { name: "Server 2", url: "https://sdmmt162.provegooott.com/1_.m3u8" },
                    { name: "Server 3", url: "https://stream.snexus.co/live/SN_WILDLIFE/main_stream.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSEQroGG4RHEkDjj2LYZYVS_DEoZEB5wjw&s", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Live 2", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein4)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "d561ff976397473e9b456b44cdffcdd2",
                            key: "2b6cff42f7fae7e8bc32f3d5c62dc3c2"
                        }
                    }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSEQroGG4RHEkDjj2LYZYVS_DEoZEB5wjw&s", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Live 3", 
                sources: [
                    { name: "Server 1", url: "https://live-en.aisports.cc/moviebox/device01/playlist.m3u8" },
                    { name: "Server 2", url: "https://satoshi-cors.herokuapp.com/http://178.33.239.54:8080/507a/tracks-v1a1/mono.m3u8" },
                    { name: "Server 3", url: "https://tgn.bozztv.com/eshgtv-dvrfl05/gin-ariana/index.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywSEQroGG4RHEkDjj2LYZYVS_DEoZEB5wjw&s", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 1", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "d0f2e5c39e70c18f29bf77768a1ad89a",
                            key: "d6853c51fcf37a18905f0609972395d7"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/m2zr04T2/tnt1.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 2", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "9f51f3dc6313ac8bc668e2d9d1c04dfa",
                            key: "74bc63e5a193454a91ca494975db33f9"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/cCVdsK0P/tnt2.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 3", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "a93c1cbfdccd23233bac13540c693e7f",
                            key: "2f6ab2e6693eb847eff3c9da8f9d01fc"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/Bvq4Qffp/tnt3.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "TNT Sports 4", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "192b1115da041585c77200128549efa1",
                            key: "634e10efe4abbb14be400a3ccbac0258"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/SQwXQRTK/tnt4.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Ten Cricket", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://edge4-moblive.yuppcdn.net/drm2/smil:tencricketdrm1.smil/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "9872e439f21f4a299cab249c6554daa3",
                            key: "0cdfcfe0d0f1fbe100554ce3ef4c4665"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/fTNwg9q7/ten-cric.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Geo Super", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-dvc-myco.io:2096/GEO_SUPER/tracks-v1a1/mono.ts.m3u8" },
                ], 
                img: "https://flix.bdtype.com/uploads/tv_image/geo-super.jpg", 
                category: "Sports",
                description: "Pakistan"
            },
            { 
                name: "T Sports", 
                sources: [
                    { name: "Server 1", url: "https://tvsen1.aynaott.com/YNMn5kZz8aLm/tracks-v1a1/mono.ts.m3u8" },
                    { name: "Server 2", url: "https://padmaonline.duckdns.org:8088/T-SportHD/index.m3u8" },
                    { name: "Server 3", url: "https://anywhere.pwisetthon.com/http://tvn1.chowdhury-shaheb.com/tsport/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/DZbVq4jM/t-sports.jpg", 
                category: "Sports",
                description: "Bangladesh"
            },
            { 
                name: "DD Sports", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/b17adfe543354fdd8d189b110617cddd/index.m3u8" },
                    { name: "Server 2", url: "https://cdn-7.pishow.tv/live/1161/master.m3u8" },
                    { name: "Server 3", url: "https://mix.drmlive.net/mix/playboxtv.m3u8?id=PBha-10569" },
                ], 
                img: "https://i.postimg.cc/WzT8m77f/dd-sports.jpg", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Sony Sports 1", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/SonyTen1HD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYSPORTS1HD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/mg0RC192/ten1.jpg", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Sony Sports 2", 
                sources: [
                    { name: "Server 1", url: "https://padmaonline.duckdns.org:8088/SonyTen2HD/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYSPORTS2HD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/y8SC16G7/ten2.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Sony Sports 3", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYSPORTS3/tracks-v1a1/mono.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/sonyten3/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/152bjh3Y/ten3.jpg", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Sony Sports 5", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/sonyten3/index.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/SONYSPORTS5HD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/qqgZ1jVH/ten5.jpg", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Star Sports 1", 
                sources: [
                    { name: "Stream 1", url: "https://padmaonline.duckdns.org:8088/StarSports1HD/index.m3u8" },
                    { name: "Stream 2", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/starsport1/index.m3u8" },
                    { name: "Stream 3", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/starsport1/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/0Nf1hhL0/sst1.jpg", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Star Sports 2", 
                sources: [
                    { name: "Stream 1", url: "https://padmaonline.duckdns.org:8088/StarSports2HD/index.m3u8" },
                    { name: "Stream 2", url: "https://anywhere.pwisetthon.com/http://103.99.249.139/starsport2/index.m3u8" },
                    { name: "Stream 3", url: "https://anywhere.pwisetthon.com/http://tvn2.chowdhury-shaheb.com/starsport2/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/wxtTsjKK/sst2.jpg", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Star Sports Select 1", 
                sources: [
                    { name: "Server 1", url: "https://mrzplayin.fun/roarzon/stream.php?id=b8966a010354b3b97eb8c050ea73460f&e=.m3u8" }
                ], 
                img: "https://smartads.in/resources/assets/uploads/product_group/television/star-sports-select-1-hd.png", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Star Sports Select 2", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/STARSPORTSSELECT2HD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/4/46/Sss-hd2-bronze.png/revision/latest?cb=20170728104956", 
                category: "Sports",
                package: ["150","250","500"],
                description: "India"
            },
            { 
                name: "Willow", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/clients/dash/enc/f60kqesunw/out/v1/a435ed7a00f947deb4369b46d8f2fb70/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "1779c27b9d077a3ba0c9cc1bb9a94b9f",
                            key: "cc5cf3b7928fb9e0a1ee6a8b566f0a8e"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/L4b8S5Df/willow.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Bein Sports 1", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein1)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "d48b6088253c443eb94d27cb7828f707",
                            key: "e9776141f9e949273a072b0e035070ab"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/dQBQkL01/bein1.jpg", 
                category: "Sports",
                description: "Qatar"
            },
            { 
                name: "Bein Sports 2", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein2)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "efa6ff1acefa43048e8b7adc21d98871",
                            key: "5d0f448b52a92035e3763c4a60275933"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/RZjv5tgh/bein2.jpg", 
                category: "Sports",
                description: "Qatar"
            },
            { 
                name: "Bein Sports 3", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(Bein3)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "816ee2f7c19f49ed84276f34541b465b",
                            key: "ca764a9973b6123a1112cffd3b32010d"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/bJRPtBpR/bein3.jpg", 
                category: "Sports",
                description: "Qatar"
            },
            { 
                name: "SPOTV", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(spoTV)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "5b593bd530f1403a8f3eb9b2cd9236c8",
                            key: "d07c6a7f0b37a4090341e6380ff85060"
                        }
                    }
                ], 
                img: "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A5BC0-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=222", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "SPOTV 2", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(spoTV2)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "1af079fb8e1d43d890c1d804431ad84c",
                            key: "3dc40bc5aaf09af8b1572646a45b1242"
                        }
                    }
                ], 
                img: "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A6A70-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=222", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Premier Sports", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "b8b595299fdf41c1a3481fddeb0b55e4",
                            key: "cd2b4ad0eb286239a4a022e6ca5fd007"
                        }
                    }
                ], 
                img: "https://i.imgur.com/GTfUEnU.png", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Premier Sports 2", 
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "59454adb530b4e0784eae62735f9d850",
                            key: "61100d0b8c4dd13e4eb8b4851ba192cc"
                        }
                    }
                ], 
                img: "https://i.imgur.com/OWVR172.png", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "WWE Network", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "00208c93f4358213b52220898b962385",
                            key: "8ae6063167228e350dd132d4a1573102"
                        }
                    }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/8/8c/WWE_Network_logo.jpeg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Animal Planet", 
                sources: [
                    { name: "Server 1", url: "https://vodzong.mjunoon.tv:8087/streamtest/Animal-Planet-158-3/playlist.m3u8" },
                    { name: "Server 2", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/animalplanet/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/RFm9McDx/animal-planet.png", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Animal Planet HD",
                sources: [
                    { 
                        name: "Server 1", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Animalplanethd2/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "df81f15150f74c799fdde64ef49dfb75",
                            key: "05794a012ae74d77953f2b9fae6804c7"
                        }
                    }
                ],
                img: "https://i.postimg.cc/Kzq6TNxy/animalplanethd.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Discovery Pakistan", 
                sources: [
                    { name: "Server 1", url: "https://livecdn.live247stream.com/discoverpakistan/web/playlist.m3u8" },
                    { name: "Server 2", url: "https://s3.ideationtec.live/Discover_Pakistan/Discover_Pakistan.m3u8" }
                ], 
                img: "https://i.postimg.cc/cH9LLc8m/d-pak.jpg", 
                category: "Infotainment",
                description: "Pakistan"
            },
            { 
                name: "Discovery Asia", 
                sources: [
                    { name: "Server 1", url: "https://cdn.skygo.mn/live/disk1/Discovery_Asia/HLSv3-FTA/Discovery_Asia.m3u8" }
                ], 
                img: "https://i.postimg.cc/7hkmbg85/d-asia.jpg", 
                category: "Infotainment",
                description: "Asia"
            },
            { 
                name: "Discovery", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverychannel2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "b70a8cf9450c4d6484b4ac4d3c6761c0",
                            key: "0908be844260409cbac180bf0181da40"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/SjFpx6XX/discovery.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Discovery HD", 
                sources: [
                    { name: "Server 1", url: "https://mrzplayin.fun/roarzon/stream.php?id=d057550070ff8a4f258a25ebd822f7e8&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/SjFpx6XX/discovery.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Discovery Science", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryscience2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "5458f45efedb4d6f8aa6ac76c85b621b",
                            key: "dbf8a0a306a64525ba3012fd225370c0"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/vZMgj4YQ/d-sci.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Discovery Turbo", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryturbo2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "c011525969e44b99a86059dbb3cdf4e8",
                            key: "6700a5d93203417b8585f7de7dd1a09b"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/0ySHyHDk/d-turbo.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Investigation Discovery", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Investigationdiscovery2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "2828ea6f6a984505b0454da0c03f68b9",
                            key: "5d3b7195086544c2807aa8c1544e7379"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/cHKNTBPr/id.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Investigation Discovery HD", 
                sources: [
                    { name: "Server 1", url: "https://mrzplayin.fun/roarzon/stream.php?id=04a07a04a079e75d643dedca798b77bb&e=.m3u8" }
                ], 
                img: "https://i.postimg.cc/cHKNTBPr/id.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "House of Crime", 
                sources: [
                    { name: "Server 1", url: "https://cc-y2z89muounal4.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-y2z89muounal4/IQJW/WBD/HouseOfCrime_IN/HouseOfCrime_IN.m3u8" }
                ], 
                img: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4600004HW_20250416T005413SQUARE.png", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "XXTreme Jobs", 
                sources: [
                    { name: "Server 1", url: "https://cc-zko1curyce7jh.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-zko1curyce7jh/IQJW/WBD/XXtremeJobs_IN/XXtremeJobs_IN.m3u8" }
                ], 
                img: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN46000011Q_20250205T004626SQUARE.png", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Foodie Hub", 
                sources: [
                    { name: "Server 1", url: "https://cc-oq5ndvigrlkaa.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-oq5ndvigrlkaa/IQJW/WBD/FoodieHub_IN/FoodieHub_IN.m3u8" }
                ], 
                img: "https://cdn.sportika.net/cropped-foodie-hub(1).png", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Wild Flix", 
                sources: [
                    { name: "Server 1", url: "https://cc-qgrxgp51645lw.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-qgrxgp51645lw/IQJW/WBD/WildFlix_IN/WildFlix_IN.m3u8" }
                ], 
                img: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN460000585_20250416T020413SQUARE.png", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Love the Planet", 
                sources: [
                    { name: "Server 1", url: "https://amg01821-lovetvchannels-lovetheplanetuksamsung-samsunguk-apopw.amagi.tv/ts-eu-w1-n2/playlist/amg01821-lovetvchannels-lovetheplanetuksamsung-samsunguk/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/VLJ8Bbbc/love-the-planet.jpg", 
                category: "Infotainment",
                description: "United States"
            },
            { 
                name: "Love Nature", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(LoveNature)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "3af2407f93664272a2b0c24be3632d93",
                            key: "6504d3e04a92a7d0d0d36818f477cae4"
                        }
                    }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Love_Nature_logo_%282025%29.svg", 
                category: "Infotainment",
                description: "United States"
            },
            { 
                name: "BBC Earth", 
                sources: [
                    { name: "Asia", url: "https://cdn4.skygo.mn/live/disk1/BBC_earth/HLSv3-FTA/BBC_earth.m3u8" },
                    { name: "UK", url: "https://d3u3pfhhvuad9k.cloudfront.net/playlist/amg00793-bbcstudios-bbcearta-lgus/playlist.m3u8" },
                    { name: "China", url: "https://hls.iill.top/api/BBC-Earth/playlist.m3u8" },

                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXOrjX8auopIAAKFRHx1Y-KLi8Ync-CWUfw&s", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "BBC Lifestyle", 
                sources: [
                    { name: "Asia", url: "https://cdn4.skygo.mn/live/disk1/BBC_lifestyle/HLSv3-FTA/BBC_lifestyle.m3u8" },
                    { name: "China", url: "https://hls.iill.top/api/BBC-Lifestyle/playlist.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYpn7TbifrC432Irpa2jXdlTdmCDDu0ThaQ&s", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "INWILD", 
                sources: [
                    { name: "Server 1", url: "https://d30jgtzu0azlqq.cloudfront.net/playlist/samsungus-insighttv/playlist.m3u8" }
                ], 
                img: "https://cdn.uc.assets.prezly.com/92770c71-9d6f-400f-8311-38e9cfec52c2/InWild_landscape-green.png", 
                category: "Infotainment",
                description: "Netherlands"
            },
            { 
                name: "INFAST", 
                sources: [
                    { name: "Server 1", url: "https://d30jgtzu0azlqq.cloudfront.net/playlist/samsungus-insighttv/playlist.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNWNOQ2CVYM3nP66GmeQlS_1D-tNJo4GnjX4_1fSMozIMfIN_oHrKwi3C2zVsZbB9E90&usqp=CAU", 
                category: "Infotainment",
                description: "Netherlands"
            },
            { 
                name: "TLC", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Tlc2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "e48e7373d6be47ecab83a20849f6823e",
                            key: "513ce07a2ee24ffdbe667eff5a9d46a8"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/63p7Yght/tlc-1.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Asian Food Network", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://unifi-live2.secureswiftcontent.com/Content/DASH/Live/channel(AsianFoodNetwork)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "d6f69611e9e94a1cba591f855b191362",
                            key: "bbd319d36c1728a8e4cc6bb4a8ad12f4"
                        }
                    }
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_mDtpbQ4xPiWFR0hhWISS-9i7jCBDorMcMBeBkEoQ805V4=s900-c-k-c0x00ffffff-no-rj", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "Cooking Panda", 
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=46" }
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_m7_6cQOwZKkI-RxzJE3e85oFdMoFBEX5iJIrUcOBwEG6A=s900-c-k-c0x00ffffff-no-rj", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "Food Food", 
                sources: [
                    { name: "Server 1", url: "https://mumt03.tangotv.in/FOODFOOD/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/SRRYryQS/foodfood.jpg", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "ETV Abhiruchi", 
                sources: [
                    { name: "Server 1", url: "https://dg3721c3ez5m0.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_ABHIRUCHI_H264_cloud-in/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/6QMwP2Hc/etv-abhiruchi.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Village Cooking Channel", 
                sources: [
                    { name: "Server 1", url: "https://glb.bozztv.com/glb/ushba-t10/index.m3u8" }
                ], 
                img: "https://yt3.googleusercontent.com/66OTTHSdZwqnz75I-z_sCFmf-EKQ9q4_OZsluCDm3KqPrcauc16Si1gGQuUgqe82Pi05Y2vnpw=s900-c-k-c0x00ffffff-no-rj", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Travelxp", 
                sources: [
                    { name: "Server 1", url: "https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/zGdP4tPR/travelxp.png", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "CGTN Documentary", 
                sources: [
                    { name: "Server 1", url: "https://0472.org/hls/cgtnd.m3u8" }
                ], 
                img: "https://i.postimg.cc/7ZKXqmzp/cgtn-docu.jpg", 
                category: "Infotainment",
                description: "China"
            },
            { 
                name: "CGTN Discovering China", 
                sources: [
                    { name: "Server 1", url: "https://ml-pull-hwc.myco.io/CGTN/hls/index.m3u8" }
                ], 
                img: "https://d2gpx7np84fwh1.cloudfront.net/external/d2y2efdi5wgkcl.cloudfront.net/fit-in/688x464/media-io/2025/10/17/Channel_Logo.80dcf707.png?width=1920", 
                category: "Infotainment",
                description: "China"
            },
            { 
                name: "Epic", 
                sources: [
                    { name: "Server 1", url: "https://epiconvh.akamaized.net/live/epic/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/c1X91C4M/epic.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "History TV", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_historyhd/default/index/default/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "a7724b7ca2604c33bb2e963a0319968a",
                            key: "6f97e3e2eb2bade626e0281ec01d3675"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/LsC3pgKH/history.jpg", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "History TV 18", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/HISTORYTVHD/tracks-v1a1/mono.m3u8" },
                    { name: "Server 2", url: "https://amg01448-amg01448c16-samsung-in-3495.playouts.now.amagi.tv/playlist/amg01448-samsungindia-historychannelhindi-samsungin/playlist.m3u8" },
                    { name: "Server 3", url: "https://amg01448-amg01448c16-samsung-in-3495.playouts.now.amagi.tv/playlist/amg01448-samsungindia-historychannelenglish-samsungin/playlist.m3u8" }
                ], 
                img: "https://static.wikia.nocookie.net/logopedia/images/6/67/History_tv18_hd.png/revision/latest?cb=20210515171227", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "National Geographic", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/NATGEOHD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/05pWTnLq/nat-geo.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "National Geographic", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://v4-pan-n79-cdn-01.live.cdn.cgates.lt/live/dash/561901/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "6d647aff767c453daa5fb54a44c783c6",
                            key: "2f971e6a1cc58e7085afc761a3f13162"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/05pWTnLq/nat-geo.jpg", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "National Geographic Wild", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://203.18.159.115/NATGEOWILDHD/tracks-v1a1/mono.m3u8" }
                ], 
                img: "https://i.postimg.cc/9MHP15XD/nat-geo-wild.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "National Geographic Wild", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://v4-pan-n79-cdn-01.live.cdn.cgates.lt/live/dash/561201/index.mpd",
                        type: "dash",
                        drm: {
                            kid: "ffa7c3ca6020428c919e13b817b7e31b",
                            key: "adf163c6c1729e6f77668d4e49f32352"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/9MHP15XD/nat-geo-wild.jpg", 
                category: "Infotainment",
                description: "World"
            },
            { 
                name: "HGTV", 
                sources: [
                    { name: "Server 1", url: "https://mediapackage-hgtv-source.fullscreen.nz/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/tCVphVLB/hgtv.jpg", 
                category: "Infotainment",
                description: "UK"
            },
            { 
                name: "Weatherspy", 
                sources: [
                    { name: "Server 1", url: "https://jukin-weatherspy-2-in.samsung.wurl.tv/playlist.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcy7OdZhH0RGal0eWFF9vozfxB4n77mFX7mc9-SBxs69k44vJKhneDA5FhrW8SHdBNcA&usqp=CAU", 
                category: "Infotainment",
                description: "Weather"
            },
            { 
                name: "Popular Science", 
                sources: [
                    { name: "Server 1", url: "https://amg13231-actve-amg13231c5-sportstribal-emea-1269.playouts.now.amagi.tv/playlist/amg13231-actvefast-powder-sportstribalemea/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/FzhNb9Jj/popular.jpg", 
                category: "Infotainment",
                description: "United States"
            },
            { 
                name: "Guinness World Records", 
                sources: [
                    { name: "Server 1", url: "https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=567" }
                ], 
                img: "https://img1.static-ottera.com/prod/tg/linear_channel/logo/480x270/grw_updated.jpg", 
                category: "Infotainment",
                description: "United States"
            },
            { 
                name: "KITE Victers", 
                sources: [
                    { name: "Server 1", url: "https://932y4x26ljv8-hls-live.5centscdn.com/victers/tv.stream/playlist.m3u8" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw5j21VYGJhzIzhCA-EZ51uIbdDNMBe96CA&s", 
                category: "Infotainment",
                description: "Malayalam"
            },
            { 
                name: "Makkal TV", 
                sources: [
                    { name: "Server 1", url: "https://5k8q87azdy4v-hls-live.wmncdn.net/MAKKAL/271ddf829afeece44d8732757fba1a66.sdp/playlist.m3u8" }
                ], 
                img: "https://play-lh.googleusercontent.com/ipwuom_ArR-0tJ21BVOOWR85CTXFG57eEf24M_kN6AXVb9iXM61ijrk9PzUwLtkd1A=w600-h300-pc0xffffff-pd", 
                category: "Infotainment",
                description: "Tamil"
            },
            { 
                name: "Peace TV", 
                sources: [
                    { name: "Server 1", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8" },
                ], 
                img: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jzxlzmgwj9tfpyv8ldpf", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Madani Bangla", 
                sources: [
                    { name: "Server 1", url: "https://tplay.live/out/bangladesh/madanibangla.index.m3u8" },
                ], 
                img: "https://i.postimg.cc/BvfMPnSP/madani-bangla.jpg", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Mercy TV", 
                sources: [
                    { name: "Server 1", url: "https://5dd3981940faa.streamlock.net/mercytv/mercytv/playlist.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMFfcf9s50fsWGifUc9Do21MCTfRN6Y9-yw&s", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Tehzeeb TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/239/master.m3u8" },
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/411855530af18a02490ab43f57ddfe38.png", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Ilm TV", 
                sources: [
                    { name: "Originals", url: "https://tplay.live/originals/ilm-tv/index.m3u8" }
                ],
                img: "https://i.postimg.cc/tTkx4MWv/ilm.jpg", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Islam Bangla", 
                sources: [
                    { name: "Server 1", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhxUqZi3tzsjdt5rn7AWyC2CQgH8z14fd2g&s", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Shquran Tv", 
                sources: [
                    { name: "Server 1", url: "https://live.kwikmotion.com/sharjahtvquranlive/shqurantv.smil/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/g03Jqxvn/sharjahtvquranlive.jpg", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Saudi Quran TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8" },
                ], 
                img: "https://yt3.googleusercontent.com/ytc/AIdro_mesiGG76gww2WnpFVUFbMz-s2d4IjJJVhDqJuCVscqKLY=s900-c-k-c0x00ffffff-no-rj", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Saudi Sunnah TV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8" },
                ], 
                img: "https://www.lyngsat.com/logo/tv/ss/sunna-tv-sa.png", 
                category: "Religious",
                description: "Islam"
            },
            { 
                name: "Akaal Channel", 
                sources: [
                    { name: "Server 1", url: "https://cdn-globecast.akamaized.net/live/eds/akaal_tv/hls1_smart_akaal/akaal_tv.m3u8" },
                ], 
                img: "https://www.sikhentrepreneur.com/wp-content/uploads/2013/09/akaalch.png", 
                category: "Religious",
                description: "Sikhism"
            },
            { 
                name: "Shubh TV", 
                sources: [
                    { name: "Server 1", url: "https://d2g1vdc6ozl2o8.cloudfront.net/out/v1/0a0dc7d7911b4fddbb4dfc963fdd4b9e/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/cb75e0ad6c6117a19b17f762903a690b.png", 
                category: "Religious",
                description: "Hinduism"
            },
            { 
                name: "Santvani Channel", 
                sources: [
                    { name: "Server 1", url: "https://cdn-2.pishow.tv/live/475/master.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/4d143f1eb83377f459f6ec5fe3feb959.png", 
                category: "Religious",
                description: "Hinduism"
            },
            { 
                name: "Om", 
                sources: [
                    { name: "Server 1", url: "https://mumt01.tangotv.in/OMTV/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/baff06610cc2d29677de762afb7911cf.png", 
                category: "Religious",
                description: "Hinduism"
            },
            { 
                name: "Om Bangla", 
                sources: [
                    { name: "Originals", url: "https://tplay.live/originals/om-bangla/index.m3u8" }
                ],
                img: "https://i.postimg.cc/jjmyWm0m/om-bangla-2.jpg", 
                category: "Religious",
                description: "Hinduism"
            },
            { 
                name: "Ekamra Paramatma", 
                sources: [
                    { name: "Originals", url: "https://live.ekamraott.com/paramatma/paramatma/index.m3u8" }
                ],
                img: "https://i.postimg.cc/zvM91RLJ/ekamra-paramatma.jpg", 
                category: "Religious",
                description: "Odia "
            },
            { 
                name: "24/7 Bangla Kirtan", 
                sources: [
                    { name: "Playlist", url: "https://tplay.live/playlist/mix/bangla-kirtan/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/QMtrZNRk/bangla-kirtan.jpg", 
                category: "Religious",
                description: "Hinduism"
            },
            { 
                name: "Paras Gold", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/PARASGOLD/index.m3u8" }
                ], 
                img: "https://www.lyngsat.com/logo/tv/pp/paras-gold-in.png", 
                category: "Religious",
                description: "Jainism"
            },
            { 
                name: "Aaseervatham TV", 
                sources: [
                    { name: "Server 1", url: "https://mumt04.tangotv.in/AASEERVATHAMTV/index.m3u8" }
                ], 
                img: "https://c.kmpr.in/assets/tv_channels_150/5220.jpg", 
                category: "Religious",
                description: "Christian"
            },
            { 
                name: "ETV Life", 
                sources: [
                    { name: "Server 1", url: "https://d2cj1h11htct8o.cloudfront.net/v1/master/9d43eacaed199f8d5883927e7aef514a8a08e108/ETV_LIFE_H264_cloud_in/index.m3u8" }
                ], 
                img: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/0b79cae17adfb14c6c414a426671c735.png", 
                category: "Religious",
                description: "Telugu"
            },
        ];
