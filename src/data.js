export const entity = {
  "urn": "urn:sigma:entity:1a3e8810-f60f-42e8-ad8d-dbfc2991b778",
  "name": "bank melli",
  "createdAt": "2022-11-09T19:48:44.651928Z",
  "updatedAt": "2022-11-09T19:48:44.651928Z",
  "riskLevel": "Elevated",
  "riskScore": 100,
  "monitored": true,
  "organizationUrn": "urn:sigma:organization:sigma-ratings",
  "caseId": "",
  "bulkId": "9e678da8-05c6-4fd1-ab6f-916098e8441c",
  "bulkName": "Sigma Search",
  "threshold": 0.8999999761581421,
  "aliases": [],
  "maxScores": {
      "Address": 80,
      "Adverse Media": 50,
      "Enforcement Action": 70,
      "Jurisdiction": 80,
      "Know Your Customer": 0,
      "PEP": 50,
      "Restricted Entity": 70,
      "Sanctions": 100,
      "State Owned Entity": 20
  },
  "searchMetadata": {
      "to": "",
      "dob": "",
      "urn": "urn:sigma:entity:1a3e8810-f60f-42e8-ad8d-dbfc2991b778",
      "from": "",
      "mode": "",
      "name": null,
      "events": [],
      "aliases": [],
      "sources": [
          "ofac_sdn_list",
          "ofac_people",
          "acuris_business",
          "acuris_people",
          "sigma_news"
      ],
      "task_id": "9e678da8-05c6-4fd1-ab6f-916098e8441c",
      "user_id": "urn:sigma:user:test",
      "countries": [],
      "languages": [],
      "monitored": true,
      "threshold": 0.9,
      "indicators": [],
      "entity_name": "bank melli",
      "entity_type": "all",
      "external_id": "",
      "request_type": "open_search",
      "additional_info": null,
      "organization_id": "sigma-ratings",
      "configuration_id": 39,
      "preferred_publishers": null
  },
  "riskData": {
      "summary": {
          "score": 100,
          "level": "Elevated",
          "detail": {
              "Address": 3,
              "Adverse Media": 69,
              "Enforcement Action": 12,
              "Jurisdiction": 8,
              "Know Your Customer": 8,
              "PEP": 18,
              "Restricted Entity": 1,
              "Sanctions": 13,
              "State Owned Entity": 3
          }
      },
      "results": [
          {
              "match_name": "Bank Melli Iran (Iraq)",
              "entity_name": "Bank Melli Iran (Iraq)",
              "aliases": [
                  "Meliiqba"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [
                      {
                          "name": "Bank Melli Iran",
                          "type": "company",
                          "relationship": "Is Linked To",
                          "full_relationships": [
                              "Bank Melli Iran (Iraq) is linked to Bank Melli Iran"
                          ],
                          "country": null,
                          "sanctioned": false
                      }
                  ],
                  "people": []
              },
              "facet": "company",
              "strength": 0.9047619047619048,
              "description": null,
              "source": {
                  "name": "Acuris Business",
                  "key": "acuris_business",
                  "match_id": "C884558",
                  "match_name": "Bank Melli Iran (Iraq)",
                  "last_checked": "2022-11-09T10:57:46Z",
                  "strength": 0.9047619047619048,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:OGILyx92YP4dWZUZtBRWU3ay2rAfIoL7NZ5JP4nN3GY=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Iran (Iraq)",
                      "score": 0,
                      "extras": {
                          "Associated Companies": [
                              {
                                  "text": "Bank Melli Iran"
                              }
                          ],
                          "Countries": [
                              {
                                  "text": "Iraq"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Xn9_6z2UR5B0sqKv8lOEy8aKYDG6JpLZbwOHQuJDkPw=",
                      "code": "JUR001",
                      "name": "Business locations in HIGHEST risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Iraq. Highest risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 80,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Iraq"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Iraq",
                      "country_code": "IQ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "111,St.24:929 Arasat SCE Baghdad"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": null,
                  "founded": null,
                  "telephone": "",
                  "website": "",
                  "status": null,
                  "lines_of_business": [],
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli Iran (Uae)",
              "entity_name": "Bank Melli Iran (Uae)",
              "aliases": [
                  "Meliaead"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [
                      {
                          "name": "Bank Melli Iran",
                          "type": "company",
                          "relationship": "Is Linked To",
                          "full_relationships": [
                              "Bank Melli Iran (UAE) is linked to Bank Melli Iran"
                          ],
                          "country": null,
                          "sanctioned": false
                      }
                  ],
                  "people": [
                      {
                          "name": "Abbas Torshizi",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Former Director"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Deputy Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Director of Bank Melli Iran (UAE), (Sate-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      }
                  ]
              },
              "facet": "company",
              "strength": 0.9097744360902255,
              "description": null,
              "source": {
                  "name": "Acuris Business",
                  "key": "acuris_business",
                  "match_id": "C884216",
                  "match_name": "Bank Melli Iran (Uae)",
                  "last_checked": "2022-11-09T10:57:46Z",
                  "strength": 0.9097744360902255,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:ivbP4GB8D09qPhIIDm-CCu6OJr11mYN2sn5jsCHcu28=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Iran (Uae)",
                      "score": 0,
                      "extras": {
                          "Associated Companies": [
                              {
                                  "text": "Bank Melli Iran"
                              }
                          ],
                          "Associated People": [
                              {
                                  "text": "Abbas Torshizi"
                              }
                          ],
                          "Countries": [
                              {
                                  "text": "United Arab Emirates"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:_qSaB0QJN6FIbKuM5Sl4GNPEpO13FNPKtfBxhypaOpg=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Abbas Torshizi",
                              "pep": 2,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Deputy Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Director of Bank Melli Iran (UAE), (Sate-Owned Enterprise)",
                                      "country": "Iran"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Abbas Torshizi",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Deputy Managing Director of Bank Melli Iran (State-Owned Enterprise), Country: Iran | Former Director of Bank Melli Iran (UAE), (Sate-Owned Enterprise), Country: Iran"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Dubai Bank Melli Iran Building,Plot No.115-0140: A"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": null,
                  "founded": null,
                  "telephone": "",
                  "website": "",
                  "status": null,
                  "lines_of_business": [],
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli",
              "entity_name": "Bank Melli Iran",
              "aliases": [
                  "Bank Melli",
                  "Melli Bank",
                  "National Bank Of Iran",
                  "Bmi"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [],
                  "people": []
              },
              "facet": "company",
              "strength": 1,
              "description": null,
              "source": {
                  "name": "OFAC Specially Designated Nationals List",
                  "key": "ofac_sdn_list",
                  "match_id": "25578",
                  "match_name": "Bank Melli",
                  "last_checked": "2022-11-09T14:39:45Z",
                  "strength": 1,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:tbdRMT9AyUbZTbC0WQDge7jSuxl_HoaZwM4MPU9c5MA=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "BANK MELLI IRAN",
                      "score": 0,
                      "extras": {
                          "Countries": [
                              {
                                  "text": "Iran"
                              },
                              {
                                  "text": "France"
                              },
                              {
                                  "text": "Hong Kong"
                              },
                              {
                                  "text": "Iraq"
                              },
                              {
                                  "text": "Oman"
                              },
                              {
                                  "text": "United Arab Emirates"
                              },
                              {
                                  "text": "Germany"
                              },
                              {
                                  "text": "Azerbaijan"
                              },
                              {
                                  "text": "United Kingdom"
                              },
                              {
                                  "text": "United States"
                              }
                          ],
                          "Identifiers": [
                              {
                                  "text": "Website: www.bmi.ir"
                              },
                              {
                                  "text": "Additional Sanctions Information -: Subject to Secondary Sanctions"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:9hF8jjGeNqmM5yZGIjDvTThikV6AYYPDS5J5pUstFRw=",
                      "code": "SAN001",
                      "name": "Appears on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "25578",
                              "url": "https://sanctionssearch.ofac.treas.gov/Details.aspx?id=25578"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "OFAC",
                      "score": 100,
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Ferdowsi Avenue - PO Box 11365-171, Tehran, IR"
                              },
                              {
                                  "text": "43 Avenue Montaigne, Paris, 75008, FR"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse, 20 Pedder St, HK"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg, 111 St 24, 929 Arasat, Baghdad, IQ"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112, Muscat, OM"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street, Abu Dhabi, AE"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St, Fujairah, AE"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd, Al Ain Club Bldg, Al Ain, Abu Dhabi, AE"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira, Dubai, AE"
                              },
                              {
                                  "text": "PO Box 5270, Oman Street Al Nakheel, Ras Al-Khaimah, AE"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St, Sharjah, AE"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg, Khalid Bin El-Walid St, Bur-Dubai, Dubai, AE"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd, Jumeirah, Dubai, AE"
                              },
                              {
                                  "text": "Postfach 112 129, Holzbruecke 2, 20421, Hamburg, DE"
                              },
                              {
                                  "text": "23 Nobel Avenue, Baku, AZ"
                              },
                              {
                                  "text": "Bank Melli Iran Building, Ferdowsi Avenue, Tehran, 11365-144, IR"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard, Opposite Al-ghadir Mosque, Tehran, IR"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor, Basra, IQ"
                              },
                              {
                                  "text": "98a Kensington High Street, London, W8 4SG, GB"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl, New York, NY, 10153, US"
                              },
                              {
                                  "text": "PO Box 1420, New York, NY, 10153, US"
                              }
                          ],
                          "Entity Number": [
                              {
                                  "text": "25578"
                              }
                          ],
                          "IDs": [
                              {
                                  "text": "Website:www.bmi.ir - , Additional Sanctions Information -:Subject to Secondary Sanctions - "
                              }
                          ],
                          "Programs": [
                              {
                                  "text": "IRAN, IFSR, SDGT"
                              }
                          ],
                          "Remarks": [
                              {
                                  "text": "All Offices Worldwide; (Linked To: ISLAMIC REVOLUTIONARY GUARD CORPS (IRGC)-QODS FORCE)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:71Jh90CavVB_F5sHIFqxzUS4eVdKo1KTC6eFj_5Z-kk=",
                      "code": "JUR001",
                      "name": "Business locations in HIGHEST risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Iran, Iraq. Highest risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 80,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Iran,Iraq"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:uxhoC9JAs-PQ_Vv0MNWFv7xtDMaVXUZuwk20P00ncp8=",
                      "code": "JUR003",
                      "name": "Business locations in HIGH risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Azerbaijan. High risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 60,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Azerbaijan"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:rTFJOO0Okqj3VLGazKdcQLayNRVzeb3__MxNK5U5E3E=",
                      "code": "ADD004",
                      "name": "Sanction Address Detected",
                      "category": "Address",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [
                          {
                              "id": 128849194324,
                              "number_of_entities": 2,
                              "address": "PO Box 3093, Ahmed Seddiqui Bldg, Khalid Bin El-Walid St, Bur-Dubai, Dubai, AE",
                              "country_code": "AE",
                              "country_name": ""
                          }
                      ],
                      "description": "PO Box 3093, Ahmed Seddiqui Bldg, Khalid Bin El-Walid St, Bur-Dubai, Dubai, AE",
                      "score": 80,
                      "extras": {
                          "Matched Address": [
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg, Khalid Bin El-Walid St, Bur-Dubai, Dubai, AE"
                              }
                          ],
                          "Type": [
                              {
                                  "text": "Sanction Address"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:fHfG8xLDOY0IqicoVu_Ih_tSm_FRAUN_NbOifoUl8Bk=",
                      "code": "ADD002",
                      "name": "Virtual Office Address Detected",
                      "category": "Address",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [
                          {
                              "id": 1417339207682,
                              "number_of_entities": 176005,
                              "address": "521 5th Avenue, New York City, New York, United States",
                              "country_code": "US",
                              "country_name": ""
                          }
                      ],
                      "description": "521 5th Avenue, New York City, New York, United States",
                      "score": 60,
                      "extras": {
                          "Matched Address": [
                              {
                                  "text": "521 5th Avenue, New York City, New York, United States"
                              }
                          ],
                          "Type": [
                              {
                                  "text": "Virtual Office Address"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Ferdowsi Avenue - PO Box 11365-171, Tehran, IR"
                      ]
                  },
                  {
                      "country": "France",
                      "country_code": "FR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "43 Avenue Montaigne, Paris, 75008, FR"
                      ]
                  },
                  {
                      "country": "Hong Kong",
                      "country_code": "HK",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Room 704-6, Wheelock Hse, 20 Pedder St, HK"
                      ]
                  },
                  {
                      "country": "Iraq",
                      "country_code": "IQ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Bank Melli Iran Bldg, 111 St 24, 929 Arasat, Baghdad, IQ"
                      ]
                  },
                  {
                      "country": "Oman",
                      "country_code": "OM",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 2643, Ruwi, 112, Muscat, OM"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 2656, Liva Street, Abu Dhabi, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 248, Hamad Bin Abdulla St, Fujairah, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1888, Clock Tower, Industrial Rd, Al Ain Club Bldg, Al Ain, Abu Dhabi, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1894, Baniyas St, Deira, Dubai, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 5270, Oman Street Al Nakheel, Ras Al-Khaimah, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 459, Al Borj St, Sharjah, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 3093, Ahmed Seddiqui Bldg, Khalid Bin El-Walid St, Bur-Dubai, Dubai, AE"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1894, Al Wasl Rd, Jumeirah, Dubai, AE"
                      ]
                  },
                  {
                      "country": "Germany",
                      "country_code": "DE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Postfach 112 129, Holzbruecke 2, 20421, Hamburg, DE"
                      ]
                  },
                  {
                      "country": "Azerbaijan",
                      "country_code": "AZ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "23 Nobel Avenue, Baku, AZ"
                      ]
                  },
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Bank Melli Iran Building, Ferdowsi Avenue, Tehran, 11365-144, IR"
                      ]
                  },
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "No. 136 Mirdamad Boulevard, Opposite Al-ghadir Mosque, Tehran, IR"
                      ]
                  },
                  {
                      "country": "Iraq",
                      "country_code": "IQ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Al Ashar Estiqlal Street - Hal Al Zohor, Basra, IQ"
                      ]
                  },
                  {
                      "country": "United Kingdom",
                      "country_code": "GB",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "98a Kensington High Street, London, W8 4SG, GB"
                      ]
                  },
                  {
                      "country": "United States",
                      "country_code": "US",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "767 5th Ave, 44th Fl, New York, NY, 10153, US"
                      ]
                  },
                  {
                      "country": "United States",
                      "country_code": "US",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1420, New York, NY, 10153, US"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": [
                      "Ferdowsi Avenue - PO Box 11365-171, Tehran, IR"
                  ],
                  "founded": null,
                  "telephone": null,
                  "website": null,
                  "status": null,
                  "lines_of_business": null,
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [
                      {
                          "number": "www.bmi.ir",
                          "country": null,
                          "register": "Website"
                      },
                      {
                          "number": "Subject to Secondary Sanctions",
                          "country": null,
                          "register": "Additional Sanctions Information -"
                      }
                  ],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli Iran Zao",
              "entity_name": "Mb Bank",
              "aliases": [
                  "Bank Melli Iran Zao",
                  "Joint Stock Company 'Mir Business Bank'",
                  "Jsc 'Mb Bank'",
                  "Mb Bank, Ao",
                  "Mir Business Bank",
                  "Mir Biznes Bank",
                  "Mir Biznes Bank, Ao",
                  "Mir Business Bank Zao"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [],
                  "people": []
              },
              "facet": "company",
              "strength": 0.9097744360902255,
              "description": null,
              "source": {
                  "name": "OFAC Specially Designated Nationals List",
                  "key": "ofac_sdn_list",
                  "match_id": "25419",
                  "match_name": "Bank Melli Iran Zao",
                  "last_checked": "2022-11-09T14:39:45Z",
                  "strength": 0.9097744360902255,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:7uUAV6JotVr89momy_yQskTm-IwQsl7VvwCtYtnbbqE=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "MB BANK",
                      "score": 0,
                      "extras": {
                          "Countries": [
                              {
                                  "text": "Russia"
                              }
                          ],
                          "Identifiers": [
                              {
                                  "text": "Additional Sanctions Information -: Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Website: www.mbbru.com"
                              },
                              {
                                  "text": "SWIFT/BIC: MRBBRUMM"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:5v4VTkHqXkDk_w7UbA2h1HSZf_L6CKHfLxjbKsTrGss=",
                      "code": "SAN001",
                      "name": "Appears on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "25419",
                              "url": "https://sanctionssearch.ofac.treas.gov/Details.aspx?id=25419"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "OFAC",
                      "score": 100,
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "9/1 ul Mashkova, Moscow, 105062, RU"
                              },
                              {
                                  "text": "RU"
                              },
                              {
                                  "text": "9/1 Mashkova St., Moscow, 105062, RU"
                              },
                              {
                                  "text": "6a Lenin Square Bld. A, Astrakhan, 414000, RU"
                              }
                          ],
                          "Entity Number": [
                              {
                                  "text": "25419"
                              }
                          ],
                          "IDs": [
                              {
                                  "text": "Additional Sanctions Information -:Subject to Secondary Sanctions - , Website:www.mbbru.com - , SWIFT/BIC:MRBBRUMM - "
                              }
                          ],
                          "Programs": [
                              {
                                  "text": "IFSR, SDGT, SYRIA"
                              }
                          ],
                          "Remarks": [
                              {
                                  "text": "All Offices Worldwide; (Linked To: BANK MELLI IRAN; Linked To: GLOBAL VISION GROUP)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Qj2w484fM8luFFcerkq8hypZYxq9FMq25qFVZY6PJqo=",
                      "code": "JUR001",
                      "name": "Business locations in HIGHEST risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Russia. Highest risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 80,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Russia"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Russia",
                      "country_code": "RU",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "9/1 ul Mashkova, Moscow, 105062, RU"
                      ]
                  },
                  {
                      "country": "Russia",
                      "country_code": "RU",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "RU"
                      ]
                  },
                  {
                      "country": "Russia",
                      "country_code": "RU",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "9/1 Mashkova St., Moscow, 105062, RU"
                      ]
                  },
                  {
                      "country": "Russia",
                      "country_code": "RU",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "6a Lenin Square Bld. A, Astrakhan, 414000, RU"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": [
                      "9/1 ul Mashkova, Moscow, 105062, RU"
                  ],
                  "founded": null,
                  "telephone": null,
                  "website": null,
                  "status": null,
                  "lines_of_business": null,
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [
                      {
                          "number": "Subject to Secondary Sanctions",
                          "country": null,
                          "register": "Additional Sanctions Information -"
                      },
                      {
                          "number": "www.mbbru.com",
                          "country": null,
                          "register": "Website"
                      },
                      {
                          "number": "MRBBRUMM",
                          "country": null,
                          "register": "SWIFT/BIC"
                      }
                  ],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli Iran (Oman)",
              "entity_name": "Bank Melli Iran (Oman)",
              "aliases": [
                  "Meliomrx"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [
                      {
                          "name": "Bank Melli Iran",
                          "type": "company",
                          "relationship": "Is Linked To",
                          "full_relationships": [
                              "Bank Melli Iran (Oman) is linked to Bank Melli Iran"
                          ],
                          "country": null,
                          "sanctioned": false
                      }
                  ],
                  "people": []
              },
              "facet": "company",
              "strength": 0.9047619047619048,
              "description": null,
              "source": {
                  "name": "Acuris Business",
                  "key": "acuris_business",
                  "match_id": "C884200",
                  "match_name": "Bank Melli Iran (Oman)",
                  "last_checked": "2022-11-09T10:57:46Z",
                  "strength": 0.9047619047619048,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:375E-HZmGv3vxwQMfL98P9cgJ46MgVzw9toJXENvZ04=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Iran (Oman)",
                      "score": 0,
                      "extras": {
                          "Associated Companies": [
                              {
                                  "text": "Bank Melli Iran"
                              }
                          ],
                          "Countries": [
                              {
                                  "text": "Oman"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Oman",
                      "country_code": "OM",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Building: 238 Al Burj Street 112 Moosa Abdul Rehman Hassan Muscat"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": null,
                  "founded": null,
                  "telephone": "",
                  "website": "",
                  "status": null,
                  "lines_of_business": [],
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli Printing Co.",
              "entity_name": "Bank Melli Printing And Publishing Co",
              "aliases": [
                  "Bank Melli Printing Co.",
                  "Bank Melli Printing And Publishing Co",
                  "Bank Melli Printing And Publishing Company",
                  "Bmppc",
                  "Bank Melli Printing & Publishing Co",
                  "Bank Melli Printing & Publishing Company",
                  "Bank Melli Printing And Publishing Co (Bmppc)",
                  "Bank Melli Printing And Publishing Company (Bmppc)",
                  "Bank Melli Printing & Publishing Co (Bmppc)",
                  "Bank Melli Printing & Publishing Company (Bmppc)",
                  "Bank Melli Printing And Publishing Co."
              ],
              "associations": {
                  "direct_owners": [
                      {
                          "name": "Bank Melli Iran",
                          "type": "company",
                          "relationship": "Is Subsidiary Of",
                          "full_relationships": [
                              "Bank Melli Printing and Publishing Co is a subsidiary of Bank Melli Iran"
                          ],
                          "country": null,
                          "sanctioned": false,
                          "shares": null,
                          "pep": null,
                          "political_positions": []
                      }
                  ],
                  "companies": [],
                  "people": [
                      {
                          "name": "Mohammad Khaki",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Former Chairperson of the Board of Directors (2010 - 2013)"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Chief Financial Officer of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2006-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Deputy Director of the Banking, Insurance and Government Companies Department of the Ministry of Economic Affairs and Finance",
                                  "country": "Iran",
                                  "from": "2008-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Bank Melli Printing and Publishing Co. (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2010-01-01T00:00:00Z",
                                  "to": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2010-01-01T00:00:00Z",
                                  "to": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      }
                  ]
              },
              "facet": "company",
              "strength": 0.9063568010936431,
              "description": null,
              "source": {
                  "name": "Acuris Business",
                  "key": "acuris_business",
                  "match_id": "C569930",
                  "match_name": "Bank Melli Printing Co.",
                  "last_checked": "2022-11-09T10:57:46Z",
                  "strength": 0.9063568010936431,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:HNbWbp9TjjhQ17Q71PyEj3catmSssx1uYiUgZgE_ta8=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Printing And Publishing Co",
                      "score": 0,
                      "extras": {
                          "Associated People": [
                              {
                                  "text": "Mohammad Khaki"
                              }
                          ],
                          "Countries": [
                              {
                                  "text": "Iran"
                              }
                          ],
                          "Direct Owners": [
                              {
                                  "text": "Bank Melli Iran"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:KxNzijf4Yc7ltJckq1ltIkYgwnwN__lvThKJTNjwYUg=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "HMT",
                      "score": 70,
                      "date": "2010-07-28T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Km 16 Karaj Special Road Tehran Iran"
                              },
                              {
                                  "text": "PO Box 37515-183 18th Km Karaj Special Road Tehran Iran"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Listed under the Japanese Ministry of Economy, Trade and Industry (METI)'s \"End User List\""
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by OFAC - not on current list - see latest OFAC document for details - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Bank Melli Printing and Publishing Co is no longer in the End User List published by the Ministry of Economy, Trade and Industry of Japan as of 22 January 2016."
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Reputational Risk Exposure"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:9hHpyHsCFSJ1LSb4XsaOS5YROLwR7Pod1hGq0X_saXk=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0014630000/0014628160.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0014640000/0014635315.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0020190000/0020186782.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/updated_names.aspx"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "OFAC",
                      "score": 70,
                      "date": "2009-03-03T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Km 16 Karaj Special Road Tehran Iran"
                              },
                              {
                                  "text": "PO Box 37515-183 18th Km Karaj Special Road Tehran Iran"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Listed under the Japanese Ministry of Economy, Trade and Industry (METI)'s \"End User List\""
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by OFAC - not on current list - see latest OFAC document for details - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Bank Melli Printing and Publishing Co is no longer in the End User List published by the Ministry of Economy, Trade and Industry of Japan as of 22 January 2016."
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Reputational Risk Exposure"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:m5Kxsd_nxWhyruG4vysh3BKe7XIuP3UFVGFgNP79ae0=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0017935000/0017931917.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0018060000/0018056374.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0018600000/0018596381.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0019980000/0019977284.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0020765000/0020761544.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "EU",
                      "score": 70,
                      "date": "2010-07-27T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Km 16 Karaj Special Road Tehran Iran"
                              },
                              {
                                  "text": "PO Box 37515-183 18th Km Karaj Special Road Tehran Iran"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Listed under the Japanese Ministry of Economy, Trade and Industry (METI)'s \"End User List\""
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by OFAC - not on current list - see latest OFAC document for details - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Bank Melli Printing and Publishing Co is no longer in the End User List published by the Ministry of Economy, Trade and Industry of Japan as of 22 January 2016."
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Reputational Risk Exposure"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:iwL3C3ps7BnSbF_pElkSpfYVSujULphvaLs9MRmQ3Kc=",
                      "code": "RST017",
                      "name": "Entity subject to trade restrictions",
                      "category": "Restricted Entity",
                      "sources": [
                          {
                              "name": "meti.go.jp",
                              "url": "https://secure.c6-intelligence.com/c6images/0018825000/0018820655.pdf"
                          },
                          {
                              "name": "meti.go.jp",
                              "url": "https://secure.c6-intelligence.com/c6images/0020030000/0020025252.pdf"
                          },
                          {
                              "name": "meti.go.jp",
                              "url": "https://secure.c6-intelligence.com/c6images/0021465000/0021462521.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Japanese Ministry of Economy Trade and Industry (METI) End User List",
                      "score": 70,
                      "date": "2011-01-19T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Km 16 Karaj Special Road Tehran Iran"
                              },
                              {
                                  "text": "PO Box 37515-183 18th Km Karaj Special Road Tehran Iran"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Listed under the Japanese Ministry of Economy, Trade and Industry (METI)'s \"End User List\""
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by OFAC - not on current list - see latest OFAC document for details - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Bank Melli Printing and Publishing Co is no longer in the End User List published by the Ministry of Economy, Trade and Industry of Japan as of 22 January 2016."
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Reputational Risk Exposure"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:z_az21JLIP4HY0jJ42wWDrGSi6IpCtYFWddyZvL6EoE=",
                      "code": "SOE001",
                      "name": "State Owned Enterprise (SOE)",
                      "category": "State Owned Entity",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "State Owned Enterprise",
                      "score": 20,
                      "date": "2009-03-04T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Km 16 Karaj Special Road Tehran Iran"
                              },
                              {
                                  "text": "PO Box 37515-183 18th Km Karaj Special Road Tehran Iran"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:b_ROS3h-LyyqoAmmahXxXTbHV5MxBCubqCFgHTn2hCU=",
                      "code": "JUR001",
                      "name": "Business locations in HIGHEST risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Iran. Highest risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 80,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Iran"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:0K_p5APxpoFvjjsmYdBbSNuA6SQCsw3kj_GEsB4serY=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Mohammad Khaki",
                              "pep": 2,
                              "role": "Has Member of the Board",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Chief Financial Officer of Bank Sepah (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2006-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Deputy Director of the Banking, Insurance and Government Companies Department of the Ministry of Economic Affairs and Finance",
                                      "country": "Iran",
                                      "from": "2008-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Chairperson of the Board of Directors of Bank Melli Printing and Publishing Co. (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2010-01-01T00:00:00Z",
                                      "to": "2013-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2010-01-01T00:00:00Z",
                                      "to": "2013-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Member of the Board of Directors of Bank Sepah (State-Owned Enterprise)",
                                      "country": "Iran"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Mohammad Khaki",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Chief Financial Officer of Bank Sepah (State-Owned Enterprise), Country: Iran, From: 2006-01-01 | Former Deputy Director of the Banking, Insurance and Government Companies Department of the Ministry of Economic Affairs and Finance, Country: Iran, From: 2008-01-01 | Former Chairperson of the Board of Directors of Bank Melli Printing and Publishing Co. (State-Owned Enterprise), Country: Iran, From: 2010-01-01, To: 2013-01-01 | Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise), Country: Iran, From: 2010-01-01, To: 2013-01-01 | Former Member of the Board of Directors of Bank Sepah (State-Owned Enterprise), Country: Iran"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Member of the Board"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Km 16 Karaj Special Road Tehran"
                      ]
                  },
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 37515-183 18th Km Karaj Special Road Tehran"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": null,
                  "founded": null,
                  "telephone": "+98 21 44983821-7",
                  "website": "www.bmipco.com",
                  "status": null,
                  "lines_of_business": [],
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli Iran Zao",
              "entity_name": "Bank Melli Iran (Russia)",
              "aliases": [
                  "Bank Melli Iran (Russia)",
                  "Bank Melli Iran Zao",
                  "Mir Business Bank",
                  "Mrbbrumm",
                  "Mrbbrummast",
                  "Mir Business Bank Zao",
                  "Cjsc Mb Bank",
                  "Cjsc Mir Business Bank",
                  "Jsc Mir Business Bank",
                  "Joint Stock Company \"Mir Business Bank\"",
                  "Jsc \"Mb Bank\"",
                  "Mb Bank, Ao",
                  "Mir Biznes Bank",
                  "Mir Business Bank Zao",
                  "Mb Bank",
                  "Mir Biznes Bank, Ao",
                  "Мир Бизнес Банк",
                  "Joint Stock Company 'Mir Business Bank'",
                  "Jsc 'Mb Bank'"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [
                      {
                          "name": "Bank Melli Iran",
                          "type": "company",
                          "relationship": "Is Linked To",
                          "full_relationships": [
                              "Bank Melli Iran (Russia) is linked to Bank Melli Iran"
                          ],
                          "country": null,
                          "sanctioned": false
                      }
                  ],
                  "people": [
                      {
                          "name": "Marina Astashkina",
                          "type": "person",
                          "relationship": "Has Officer",
                          "full_relationships": [
                              "Chief Accountant"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Chief Accountant, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Dimitri Denisov",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Director of Communication"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Director of Communication, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Saeed Farkhondi",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Manager"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Manager, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Mohammad Hazzar",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "General Director"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "General Director, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Radi Panchenko",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Deputy General Director (13.10.2014-), Member of the Management Board (25.06.2015-)"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": "1967-11-29T00:00:00Z",
                          "political_positions": [
                              {
                                  "description": "Former Deputy Head of Treasury of CJSC Mir Business Bank (State-Owned Enterprise)",
                                  "country": "Russia",
                                  "from": "2014-03-03T00:00:00Z",
                                  "to": "2014-10-30T00:00:00Z"
                              },
                              {
                                  "description": "Deputy General Director of CJSC Mir Business Bank (State-Owned Enterprise)",
                                  "country": "Russia",
                                  "from": "2014-10-30T00:00:00Z"
                              },
                              {
                                  "description": "Member of the Management Board of CJSC Mir Business Bank (State-Owned Enterprise)",
                                  "country": "Russia",
                                  "from": "2015-06-25T00:00:00Z"
                              }
                          ]
                      },
                      {
                          "name": "Mohammad Khataei",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Manager of Treasury Department"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Manager of Treasury Department, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Amir Mirzaei",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Deputy General Director"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy General Director, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Ali Mahmoodi",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Branch Manager"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Branch Manager, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      },
                      {
                          "name": "Sergey Vostrikov",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Deputy Branch Manager"
                          ],
                          "country": "RU",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy Branch Manager, Bank Melli Iran (Russia)",
                                  "country": "Russia"
                              }
                          ]
                      }
                  ]
              },
              "facet": "company",
              "strength": 0.9097744360902255,
              "description": null,
              "source": {
                  "name": "Acuris Business",
                  "key": "acuris_business",
                  "match_id": "C506605",
                  "match_name": "Bank Melli Iran Zao",
                  "last_checked": "2022-11-09T10:57:46Z",
                  "strength": 0.9097744360902255,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:nVJC-eK4EgFpJsx_YnpL7WcVkxyVcum-1iheAFxHlSo=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Iran (Russia)",
                      "score": 0,
                      "extras": {
                          "Associated Companies": [
                              {
                                  "text": "Bank Melli Iran"
                              }
                          ],
                          "Associated People": [
                              {
                                  "text": "Mohammad Hazzar"
                              },
                              {
                                  "text": "Amir Mirzaei"
                              },
                              {
                                  "text": "Radi Panchenko"
                              },
                              {
                                  "text": "Mohammad Khataei"
                              },
                              {
                                  "text": "Saeed Farkhondi"
                              },
                              {
                                  "text": "Marina Astashkina"
                              },
                              {
                                  "text": "Dimitri Denisov"
                              },
                              {
                                  "text": "Ali Mahmoodi"
                              },
                              {
                                  "text": "Sergey Vostrikov"
                              }
                          ],
                          "Countries": [
                              {
                                  "text": "Russia"
                              }
                          ],
                          "Identifiers": [
                              {
                                  "text": "BIC Number: MRBBRUMM"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:kM8FIqYsXd5nAxkO1BkLAkid4SUFzctRvSA9N8MkDfo=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "HMT",
                      "score": 70,
                      "date": "2008-06-24T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Number 9/1, ul Mashkova Moscow Russia 105062"
                              },
                              {
                                  "text": "6a Lenin Square Bld. A, Astrakhan Russia 414000"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MRBBRUMM"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SYRIA"
                              },
                              {
                                  "text": "OFAC Unique ID 25419"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:6sm4Y7ubfFsa47Abs5k4FqzLxGjbVSQJQGtftOb_wEY=",
                      "code": "SAN001",
                      "name": "Appears on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0010230000/0010228004.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0010235000/0010234845.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0010660000/0010657456.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0011675000/0011673874.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0011675000/0011673605.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0018070000/0018066502.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019235000/0019231482.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019865000/0019860739.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019945000/0019942421.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/updated_names.aspx"
                          },
                          {
                              "name": "home.treasury.gov",
                              "url": "https://home.treasury.gov/news/press-releases/sm541"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/20181105_names.aspx"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/20181120.aspx"
                          },
                          {
                              "name": "home.treasury.gov",
                              "url": "https://home.treasury.gov/news/press-releases/sm553"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "OFAC",
                      "score": 100,
                      "date": "2007-10-25T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Number 9/1, ul Mashkova Moscow Russia 105062"
                              },
                              {
                                  "text": "6a Lenin Square Bld. A, Astrakhan Russia 414000"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MRBBRUMM"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SYRIA"
                              },
                              {
                                  "text": "OFAC Unique ID 25419"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:kag_5GrYF0NfZZlMicEwXrKCJLIeDKH4d8HhZSQmsHY=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0018060000/0018056374.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0020130000/0020126690.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0020765000/0020761544.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "EU",
                      "score": 70,
                      "date": "2010-08-16T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Number 9/1, ul Mashkova Moscow Russia 105062"
                              },
                              {
                                  "text": "6a Lenin Square Bld. A, Astrakhan Russia 414000"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MRBBRUMM"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SYRIA"
                              },
                              {
                                  "text": "OFAC Unique ID 25419"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:PAWJbh2kVPRlAPPo_57uUJUGISAj2EfV8sVA21BzhOU=",
                      "code": "SOE001",
                      "name": "State Owned Enterprise (SOE)",
                      "category": "State Owned Entity",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "State Owned Enterprise",
                      "score": 20,
                      "date": "2007-10-29T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Number 9/1, ul Mashkova Moscow Russia 105062"
                              },
                              {
                                  "text": "6a Lenin Square Bld. A, Astrakhan Russia 414000"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:beHV3c_JEADS2IN7Y8bW-k0XZgsTv7j5jYyMPpnyYV0=",
                      "code": "ENF002",
                      "name": "Regulatory issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "fincen.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0018600000/0018595808.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Regulatory issue (fincen.gov)",
                      "score": 70,
                      "date": "2010-11-23T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "Number 9/1, ul Mashkova Moscow Russia 105062"
                              },
                              {
                                  "text": "6a Lenin Square Bld. A, Astrakhan Russia 414000"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "SOE"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MRBBRUMM"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SYRIA"
                              },
                              {
                                  "text": "OFAC Unique ID 25419"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:vBUinUDuCT0itCFDhCeFJx0jTFtJ_hM9NPozUAjUoY8=",
                      "code": "JUR001",
                      "name": "Business locations in HIGHEST risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Russia. Highest risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 80,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Russia"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:s47R9i69XO0gIu-1u0Ea0oE_K4OdUdHtatfiHI053rE=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Marina Astashkina",
                              "pep": 2,
                              "role": "Has Officer",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Chief Accountant, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Marina Astashkina",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Chief Accountant, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Officer"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:w8rL2WfMJ3sNsrT30bUKG21a08wBiTdJC7-8Gk3wP5M=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Dimitri Denisov",
                              "pep": 2,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Director of Communication, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Dimitri Denisov",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Director of Communication, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:o07dlww-QsgCryZkEgwMtTrRkXd-KEtzZiwhO9RdaXY=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Saeed Farkhondi",
                              "pep": 2,
                              "role": "Has Manager",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Manager, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Saeed Farkhondi",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Manager, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Manager"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:jqFH747-8XhtOqXrcXtgP-pC8wXe3-4nZ4VaM3K9GaQ=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Mohammad Hazzar",
                              "pep": 2,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "General Director, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Mohammad Hazzar",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "General Director, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:C6klQbNSKoIdukS8_JKf02S6d4Yv6xx6gI9RUHr1uEM=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "date_of_birth": "1967-11-29T00:00:00Z",
                              "name": "Radi Panchenko",
                              "pep": 2,
                              "role": "Has Member of the Board",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Deputy Head of Treasury of CJSC Mir Business Bank (State-Owned Enterprise)",
                                      "country": "Russia",
                                      "from": "2014-03-03T00:00:00Z",
                                      "to": "2014-10-30T00:00:00Z"
                                  },
                                  {
                                      "description": "Deputy General Director of CJSC Mir Business Bank (State-Owned Enterprise)",
                                      "country": "Russia",
                                      "from": "2014-10-30T00:00:00Z"
                                  },
                                  {
                                      "description": "Member of the Management Board of CJSC Mir Business Bank (State-Owned Enterprise)",
                                      "country": "Russia",
                                      "from": "2015-06-25T00:00:00Z"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Radi Panchenko",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Deputy Head of Treasury of CJSC Mir Business Bank (State-Owned Enterprise), Country: Russia, From: 2014-03-03, To: 2014-10-30 | Deputy General Director of CJSC Mir Business Bank (State-Owned Enterprise), Country: Russia, From: 2014-10-30 | Member of the Management Board of CJSC Mir Business Bank (State-Owned Enterprise), Country: Russia, From: 2015-06-25"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | DoB: 11-29-1967 | Relationship: Has Member of the Board"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:0tvfaA-3bqs1i3NG__h-4YiDzSCMZaYDBX_bRSy1poE=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Mohammad Khataei",
                              "pep": 2,
                              "role": "Has Manager",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Manager of Treasury Department, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Mohammad Khataei",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Manager of Treasury Department, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Manager"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:kuPhumQEszgIk_PgbsRb5_Cc1o68SE602e6JFEiYSKM=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Amir Mirzaei",
                              "pep": 2,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Deputy General Director, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Amir Mirzaei",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Deputy General Director, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:vqi--b4SaTjsZ5eFiQIfUdzLGynerCyP07q1D9fzwH4=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Ali Mahmoodi",
                              "pep": 2,
                              "role": "Has Manager",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Branch Manager, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Ali Mahmoodi",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Branch Manager, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Manager"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:5NTYX-DTBz_HLcuUja1z_y5639pZ9GHNgO2lLv3iXPU=",
                      "code": "PEP002",
                      "name": "Associated with level 2 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "RU",
                              "name": "Sergey Vostrikov",
                              "pep": 2,
                              "role": "Has Manager",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Deputy Branch Manager, Bank Melli Iran (Russia)",
                                      "country": "Russia"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Sergey Vostrikov",
                      "score": 30,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Deputy Branch Manager, Bank Melli Iran (Russia), Country: Russia"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: RU | Relationship: Has Manager"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Russia",
                      "country_code": "RU",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Number 9/1, ul Mashkova Moscow 105062"
                      ]
                  },
                  {
                      "country": "Russia",
                      "country_code": "RU",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "6a Lenin Square Bld. A, Astrakhan 414000"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": null,
                  "founded": null,
                  "telephone": "+7 (8512)484948",
                  "website": "www.mbbru.com",
                  "status": null,
                  "lines_of_business": [],
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [
                      {
                          "number": "MRBBRUMM",
                          "country": null,
                          "register": "BIC Number"
                      }
                  ],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli Iran",
              "entity_name": "Bank Melli Iran",
              "aliases": [],
              "associations": {
                  "direct_owners": [],
                  "companies": [],
                  "people": []
              },
              "facet": "adverse_news",
              "strength": 0.9365079365079365,
              "description": null,
              "source": {
                  "name": "Sigma News",
                  "key": "sigma_news",
                  "match_id": "93be2c87-8bb6-4359-bb1a-ebd0396094a2",
                  "match_name": "Bank Melli Iran",
                  "last_checked": "2022-11-09T19:48:44Z",
                  "strength": 0.9365079365079365,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:3ug9Bme0hmrwNTzNW5CfwcnkjEP5VazU5Xk6ZrNE48A=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "MENAFN.COM",
                              "url": "https://menafn.com/1105044953/BMI-head-points-to-importance-of-establishing-Melli-Plus-in-future-bank-branches"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-10-16_product_change_event#7124",
                              "articles": [
                                  {
                                      "article_hash": "d1f16cadd4b8f0e37ca673952511513ac1c4d506",
                                      "title": "BMI head points to importance of establishing “Melli Plus” i...",
                                      "url": "https://menafn.com/1105044953/BMI-head-points-to-importance-of-establishing-Melli-Plus-in-future-bank-branches",
                                      "body": "(MENAFN) The Chairman of the Board of Directors of Bank Melli Ian (BMI) talked about the establishing of “Melli Plus” at the bank branch and stated that starting and presenting an additional communication space to clients in the highest goal behind beginning the platform, so that these branches are ",
                                      "language": "en",
                                      "publisher": "MENAFN.COM",
                                      "published_date": "2022-10-19T07:37:09",
                                      "event_label": "Product Change",
                                      "event_confidence": 0.6442892551422119
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "BMI head points to importance of establishing “Melli Plus” i...",
                      "score": 11,
                      "date": "2022-10-19T07:37:09Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Product Change (64%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:VqSJZnsqLSQ4rKuDOUOb8qSDdiLxGyqgXNc-MNjuAtQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tehran Times",
                              "url": "https://www.tehrantimes.com/news/474208/BMI-Notifies-Comprehensive-Instructions-for-Presenting-Services"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-26_product_change_event#7489",
                              "articles": [
                                  {
                                      "article_hash": "2c8821bbd4a30e1a60c7c45712aa14a9ed4bb324",
                                      "title": "BMI Notifies “Comprehensive Instructions for Presenting Services to Knowledge-based Companies”",
                                      "url": "https://www.tehrantimes.com/news/474208/BMI-Notifies-Comprehensive-Instructions-for-Presenting-Services",
                                      "body": "Bank Melli Iran (BMI) notified the comprehensive instructions for providing quality services to knowledge-based companies.\n\nIn line with implementing sublime remarks of Leader of the Islamic Revolution on supporting knowledge-based companies as the main strategy for economic progress and development",
                                      "language": "en",
                                      "publisher": "Tehran Times",
                                      "published_date": "2022-06-29T14:14:23",
                                      "event_label": "Product Change",
                                      "event_confidence": 0.942783534526825
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "BMI Notifies “Comprehensive Instructions for Presenting Services to Knowledge-based Companies”",
                      "score": 11,
                      "date": "2022-06-29T14:14:23Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Product Change (94%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:E6Y9EWINnR3ihIe9AMjzvfplMYNgAPlAe4-TIDd_2jI=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "The National",
                              "url": "https://www.thenationalnews.com/mena/iran/2022/06/07/burglars-cut-through-bank-wall-to-steal-from-250-deposit-boxes-in-iran/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-05_other_crime_event#2812",
                              "articles": [
                                  {
                                      "article_hash": "aa15eb2b116be4b7a225f07fd5bc53067edb2d58",
                                      "title": "Burglars cut through bank wall to steal from 250 deposit boxes in Iran",
                                      "url": "https://www.thenationalnews.com/mena/iran/2022/06/07/burglars-cut-through-bank-wall-to-steal-from-250-deposit-boxes-in-iran/",
                                      "body": "Burglars in Iran’s capital, Tehran, cut through the wall of a bank from the building next door and stole from dozens of safe deposit boxes, state TV has reported.\n\nThe thieves took advantage of a three-day holiday to break into a major branch of government-owned Bank Melli Iran and steal from 250 bo",
                                      "language": "en",
                                      "publisher": "The National",
                                      "published_date": "2022-06-07T05:51:06",
                                      "event_label": "Other Crime",
                                      "event_confidence": 0.40735363960266113
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Burglars cut through bank wall to steal from 250 deposit boxes in Iran",
                      "score": 11,
                      "date": "2022-06-07T05:51:06Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Other Crime (40%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:R9Dkz7uxlCOtyU_EBCglVeQeWGbLzDKCOxKUwOcGx3o=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Asharq Al-awsat - English",
                              "url": "https://english.aawsat.com/home/article/3688026/burglars-cut-through-wall-rob-bank-deposit-boxes-iran"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-05_violent_crime_event#1445",
                              "articles": [
                                  {
                                      "article_hash": "0d9437fe98623ecd145b6709f4bb3331504a9d9c",
                                      "title": "Burglars Cut through Wall to Rob Bank Deposit Boxes in Iran",
                                      "url": "https://english.aawsat.com/home/article/3688026/burglars-cut-through-wall-rob-bank-deposit-boxes-iran",
                                      "body": "An Iranian walks next to a wall painting of Iran’s national flag at a street in Tehran, Iran, 02 June 2022. (EPA)\n\nAsharq Al-Awsat\n\nDozens of safe deposit boxes were robbed after burglars cut through the wall of a bank from a neighboring building in Iran’s capital, state TV reported Monday.\n\nThe rep",
                                      "language": "en",
                                      "publisher": "Asharq Al-awsat - English",
                                      "published_date": "2022-06-06T18:23:46",
                                      "event_label": "Violent Crime",
                                      "event_confidence": 0.7621027827262878
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Burglars Cut through Wall to Rob Bank Deposit Boxes in Iran",
                      "score": 11,
                      "date": "2022-06-06T18:23:46Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Violent Crime (76%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:5Ab7txLH75XpYqN5aekGuM2QbpudIkhbQXqcvHx9N8k=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Reuters",
                              "url": "https://www.reuters.com/business/finance/german-finance-regulator-bans-bank-melli-iran-issuing-loans-2021-10-08/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-10-10_regulatory_event#1214",
                              "articles": [
                                  {
                                      "article_hash": "7465e38f19356487ca7d51e6d8ad496699b4dfae",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans",
                                      "url": "https://www.reuters.com/business/finance/german-finance-regulator-bans-bank-melli-iran-issuing-loans-2021-10-08/",
                                      "body": "A company logo of Bank Melli is displayed on the glass door at its branch in Hong Kong August 8, 2012. REUTERS/Bobby Yip/File Photo\n\nBERLIN, Oct 8 (Reuters) - German finance regulator BaFin said on Friday it had banned a Hamburg-based branch of Bank Melli Iran from issuing loans, citing infringement",
                                      "language": "en",
                                      "publisher": "Reuters",
                                      "published_date": "2021-10-08T11:11:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9007628560066223
                                  },
                                  {
                                      "article_hash": "1519d76a9f3b94a9e03f7358ba23f7c408fa985d",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans | Financial News",
                                      "url": "https://www.lse.co.uk/news/german-finance-regulator-bans-bank-melli-iran-from-issuing-loans-it1xegx9tf34e7j.html",
                                      "body": "BERLIN, Oct 8 (Reuters) - German finance regulator BaFin\n\nsaid on Friday it had banned a Hamburg-based branch of Bank\n\nMelli Iran from issuing loans, citing infringements of\n\ntransparency rules.\n\n\"BaFin had identified contraventions of the requirements for\n\nproper business organisation within the me",
                                      "language": "en",
                                      "publisher": "London South East",
                                      "published_date": "2021-10-08T09:49:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9082573056221008
                                  },
                                  {
                                      "article_hash": "751f17a031931bcb309f880b9fce1295321b04e5",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans",
                                      "url": "https://www.devdiscourse.com/article/business/1760859-german-finance-regulator-bans-bank-melli-iran-from-issuing-loans",
                                      "body": "German finance regulator BaFin said on Friday it had banned a Hamburg-based branch of Bank Melli Iran from issuing loans, citing infringements of transparency rules.\n\n\"BaFin had identified contraventions of the requirements for proper business organization within the meaning of section 25a (1) of th",
                                      "language": "en",
                                      "publisher": "Devdiscourse",
                                      "published_date": "2021-10-08T10:08:58",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9007628560066223
                                  },
                                  {
                                      "article_hash": "dcbaeef321288c46c9e28e8b8a5c0ffcc1d55bd9",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans",
                                      "url": "https://www.devdiscourse.com/article/business/1760956-german-finance-regulator-bans-bank-melli-iran-from-issuing-loans",
                                      "body": "German finance regulator BaFin said on Friday it had banned a Hamburg-based branch of Bank Melli Iran from issuing loans, citing infringement of transparency rules.\n\n\"BaFin had identified contraventions of the requirements for proper business organization within the meaning of section 25a (1) of the",
                                      "language": "en",
                                      "publisher": "Devdiscourse",
                                      "published_date": "2021-10-08T11:04:37",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9007628560066223
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "German finance regulator bans Bank Melli Iran from issuing loans",
                      "score": 11,
                      "date": "2021-10-08T11:11:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (90%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:rTij0x9tA6F3le13UIXsq0wL4ylDsJz5T8ftI0Di5MY=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "ZAWYA",
                              "url": "https://www.zawya.com/mena/en/legal/story/Verdict_due_in_largest_money_laundering_case_in_the_history_of_Bahrain-SNG_219148299/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-06-27_financial_crime_event#815",
                              "articles": [
                                  {
                                      "article_hash": "bb7ccf3384064b749e13de92766892f8f2c267b9",
                                      "title": "Verdict due in largest money laundering case in the history of Bahrain",
                                      "url": "https://www.zawya.com/mena/en/legal/story/Verdict_due_in_largest_money_laundering_case_in_the_history_of_Bahrain-SNG_219148299/",
                                      "body": "Bahrain-based Future Bank , the Central Bank of Iran and 12 other Iranian banks are facing charges of laundering more than $1.3bn between 2008 and 2012.\n\nA verdict date has been set in the largest money laundering case in the history of Bahrain, with 14 banks accused of laundering more than a billio",
                                      "language": "en",
                                      "publisher": "ZAWYA",
                                      "published_date": "2021-06-24T10:21:10",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.91342693567276
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Verdict due in largest money laundering case in the history of Bahrain",
                      "score": 11,
                      "date": "2021-06-24T10:21:10Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (91%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:iWUuO8GgAa_jY0UN5nnwVgpbNLcI29RyYQwsScaNvN8=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Out-Law.com",
                              "url": "https://www.pinsentmasons.com/out-law/analysis/iranian-companies-may-not-benefit-from-court-opinion-on-eu-blocking-statute"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-06-06_legal_risk_event#651",
                              "articles": [
                                  {
                                      "article_hash": "b59129a0962c7fb33419d1e5e913d12ad54325af",
                                      "title": "Iranian companies may not benefit from court opinion on EU blocking statute",
                                      "url": "https://www.pinsentmasons.com/out-law/analysis/iranian-companies-may-not-benefit-from-court-opinion-on-eu-blocking-statute",
                                      "body": "In May an advocate general of the Court of Justice of the EU (CJEU) issued an opinion which found that a decision by an EU entity to terminate a contractual relationship with an Iranian party subject to US primary sanctions should be regarded as invalid if it cannot be justified on any ground other ",
                                      "language": "en",
                                      "publisher": "Out-Law.com",
                                      "published_date": "2021-06-07T13:49:37",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9243181943893433
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iranian companies may not benefit from court opinion on EU blocking statute",
                      "score": 11,
                      "date": "2021-06-07T13:49:37Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (92%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:4edPPvACjOAby5oPqZfUO0o2MPiRpoqwLhByawgKatc=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "JD Supra",
                              "url": "https://www.jdsupra.com/legalnews/the-eu-u-s-sanctions-dilemma-the-6153628/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-30_regulatory_event#1397",
                              "articles": [
                                  {
                                      "article_hash": "6120360fe705aa3ffae7793bc29a860620598c4f",
                                      "title": "The EU – U.S. Sanctions Dilemma: The Advocate General of the European Court of Justice Weighs in",
                                      "url": "https://www.jdsupra.com/legalnews/the-eu-u-s-sanctions-dilemma-the-6153628/",
                                      "body": "[co-author: Richard Masquelier*]\n\nIn May 2018 the United States announced the reinstitution of sanctions against Iran that had previously been lifted pursuant to the Joint Comprehensive Plan Action (“JCPOA”).[1]\n\nThe U.S. sanctions on Iran that were revived by the U.S. action in 2018 include many th",
                                      "language": "en",
                                      "publisher": "JD Supra",
                                      "published_date": "2021-05-27T21:59:07",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.7446563839912415
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "The EU – U.S. Sanctions Dilemma: The Advocate General of the European Court of Justice Weighs in",
                      "score": 11,
                      "date": "2021-05-27T21:59:07Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (74%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:vNcOLEqsL1iBX2BxZf3WXadjLbgfsEfI_IT4ULECiNA=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "OCCRP",
                              "url": "https://www.occrp.org/en/daily/14449-bahrain-sues-13-banks-for-laundering-1-3bn-for-iran"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-23_legal_risk_event#1461",
                              "articles": [
                                  {
                                      "article_hash": "e7b12845fd4f1c10325f5e1310b5c165cc28c840",
                                      "title": "Bahrain Sues 13 Banks for Laundering $1.3bn for Iran",
                                      "url": "https://www.occrp.org/en/daily/14449-bahrain-sues-13-banks-for-laundering-1-3bn-for-iran",
                                      "body": "Bahrain’s public prosecutor has referred 13 banks, including Iran’s Central Bank, to court for money laundering and other “unlawful banking practices” carried out between 2008 and 2012 with the goal to circumvent sanctions against Tehran, the country’s state-run news agency said on Tuesday.\n\nBanks i",
                                      "language": "en",
                                      "publisher": "OCCRP",
                                      "published_date": "2021-05-20T21:33:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9395342469215393
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain Sues 13 Banks for Laundering $1.3bn for Iran",
                      "score": 11,
                      "date": "2021-05-20T21:33:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (93%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:YTotTCNNl-eTMLAHj43Tne9QJO3XdBwXIXlnHslmhSM=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Al-Bawaba",
                              "url": "https://www.albawaba.com/business/bahrain-refers-central-bank-iran-court-laundering-over-13-billion-1428664"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-23_financial_crime_event#83",
                              "articles": [
                                  {
                                      "article_hash": "e9df279a7d201742a35ad8fc025bf5dc90dad7e3",
                                      "title": "Bahrain Refers Central Bank of Iran to Court for Laundering Over $1.3 Billion",
                                      "url": "https://www.albawaba.com/business/bahrain-refers-central-bank-iran-court-laundering-over-13-billion-1428664",
                                      "body": "Public Prosecution in Bahrain referred the Central Bank of Iran and several other banks to criminal trial on charges of laundering more than $1.3 billion through the Manama-based Future Bank, which the kingdom shut in 2016.\n\nBahrain's Attorney General Dr. Ali bin Fadhel Al Buainain said that followi",
                                      "language": "en",
                                      "publisher": "Al-Bawaba",
                                      "published_date": "2021-05-20T12:30:00",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.788781464099884
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain Refers Central Bank of Iran to Court for Laundering Over $1.3 Billion",
                      "score": 11,
                      "date": "2021-05-20T12:30:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (78%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:W-k0f-KtBFB6AgJ1T82WoPNENziLQwy3lFVtRZJNGQA=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Asharq Al-awsat - English",
                              "url": "https://english.aawsat.com/home/article/2981021/bahrain-public-prosecution-refers-central-bank-iran-court-laundering-over-1bln"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-16_financial_crime_event#280",
                              "articles": [
                                  {
                                      "article_hash": "cddba7ea0fc49d09f451d560f76ad7b71b1463d9",
                                      "title": "Bahrain Public Prosecution Refers Central Bank of Iran to Court for Laundering Over $1Bln",
                                      "url": "https://english.aawsat.com/home/article/2981021/bahrain-public-prosecution-refers-central-bank-iran-court-laundering-over-1bln",
                                      "body": "Public Prosecution in Bahrain referred the Central Bank of Iran and several other banks to criminal trial on money laundering charges.\n\nManama – Asharq Al-Awsat\n\nPublic Prosecution in Bahrain referred the Central Bank of Iran and several other banks to criminal trial on charges of laundering more th",
                                      "language": "en",
                                      "publisher": "Asharq Al-awsat - English",
                                      "published_date": "2021-05-19T08:11:48",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.7676421403884888
                                  },
                                  {
                                      "article_hash": "9f061612ca249a94493e52ac2ae3e8f768bfe460",
                                      "title": "Bahrain public prosecution refers Central Bank of Iran, 12 other banks to court for laundering $1bn",
                                      "url": "https://gulfnews.com/world/gulf/bahrain/bahrain-public-prosecution-refers-central-bank-of-iran-12-other-banks-to-court-for-laundering-1bn-1.1621352017132",
                                      "body": "Manama city, Bahrain. The Attorney General indicated that the investigations into the violations of Future Bank, established in the Kingdom of Bahrain, were carried pursuant to reports of the Central Bank of Bahrain and violations it monitored through its audit processes. Image Credit: Shutterstock\n",
                                      "language": "en",
                                      "publisher": "Gulf News",
                                      "published_date": "2021-05-18T15:28:59",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.5726988911628723
                                  },
                                  {
                                      "article_hash": "f358e57e29cb18185a83ba1195d7bef67415c688",
                                      "title": "Bahrain prosecutes Central Bank of Iran, 12 others for laundering over $1bn",
                                      "url": "https://www.middleeastmonitor.com/20210519-bahrain-prosecutes-central-bank-of-iran-12-others-for-laundering-over-1bn/",
                                      "body": "Bahrain's Public Prosecution yesterday referred the Central Bank of Iran and 12 other banks to criminal trial on charges of laundering over $1.3 billion using the Manama-based Future Bank, which was shut down by the authorities in 2016. It is said to be the largest case of its kind in the kingdom.\n\n",
                                      "language": "en",
                                      "publisher": "Middle East Monitor",
                                      "published_date": "2021-05-19T12:56:00",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.7178391814231873
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain Public Prosecution Refers Central Bank of Iran to Court for Laundering Over $1Bln",
                      "score": 11,
                      "date": "2021-05-19T08:11:48Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (76%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:EJoNScMvy0Zfv4tbU8o6jW58R5rbuPd3TsYXxnWmbeU=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Reuters",
                              "url": "https://t.co/5JoCBONWwp"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-09_regulatory_event#1623",
                              "articles": [
                                  {
                                      "article_hash": "25ef0e3bd783b62c80dfb7dfae5a6fe8575e9677",
                                      "title": "U.S. sanctions should not stop EU business with Iran, EU court adviser says",
                                      "url": "https://t.co/5JoCBONWwp",
                                      "body": "A legal adviser to the European Union's top court said on Wednesday that a German company was wrong to terminate its contract with an Iranian bank if its only justification was concern about becoming entangled in U.S. sanctions on Iran.\n\nThe opinion is not binding and the case will not go to the Eur",
                                      "language": "en",
                                      "publisher": "Reuters",
                                      "published_date": "2021-05-12T13:27:42.374",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9131907820701599
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "U.S. sanctions should not stop EU business with Iran, EU court adviser says",
                      "score": 11,
                      "date": "2021-05-12T13:27:42Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (91%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:3lHNgwpdN560iMIjw-awtn65iradBStjiEp6a-AsE-U=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Asharq Al-awsat - English",
                              "url": "https://english.aawsat.com/home/article/2714826/bahrain-accuses-future-bank-iranian-banks-money-laundering"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-01-03_financial_crime_event#172",
                              "articles": [
                                  {
                                      "article_hash": "e20ca81b9c6e0511124a8875678c7ed7ca568d22",
                                      "title": "Bahrain Accuses Future Bank, Iranian Banks of Money Laundering",
                                      "url": "https://english.aawsat.com/home/article/2714826/bahrain-accuses-future-bank-iranian-banks-money-laundering",
                                      "body": "The pink supermoon rises next to Bahrain World Trade Centre in Manama, Bahrain April 7, 2020. (Reuters)\n\nManama – Asharq Al-Awsat\n\nThe high criminal court of Bahrain accused on Thursday the Iran-owned Future Bank, five of its officials and several Iranian banks of money laundering.\n\nThe bank officia",
                                      "language": "en",
                                      "publisher": "Asharq Al-awsat - English",
                                      "published_date": "2021-01-01T06:47:35",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.9110853672027588
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain Accuses Future Bank, Iranian Banks of Money Laundering",
                      "score": 11,
                      "date": "2021-01-01T06:47:35Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (91%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:L8aAnAxRdWN9EtdVRseBFd-l3ehtxFmC6XgbKALinO8=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Trend News Agency",
                              "url": "https://en.trend.az/business/finance/3285245.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-08-16_ownership_change_event#467",
                              "articles": [
                                  {
                                      "article_hash": "9ce5254c28f96bd45896e9b9b43c8dab91c1b598",
                                      "title": "Bank Melli Iran continues to sell additional property",
                                      "url": "https://en.trend.az/business/finance/3285245.html",
                                      "body": "If You already have a subscription, please log in:\n\nIf You do not have a subscription, then You can get it clicking on this button:",
                                      "language": "en",
                                      "publisher": "Trend News Agency",
                                      "published_date": "2020-08-16T11:47:00",
                                      "event_label": "Ownership Change",
                                      "event_confidence": 0.9288454651832581
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Iran continues to sell additional property",
                      "score": 11,
                      "date": "2020-08-16T11:47:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Ownership Change (92%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:5eyHFVL0Sitz4zFqZnSvh4jwTk1exmnQO4McpHYSLlQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Al-Bawaba",
                              "url": "https://www.albawaba.com/news/five-iranians-detained-spying-israel-britain-and-germany-1373870"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-08-09_other_crime_event#118",
                              "articles": [
                                  {
                                      "article_hash": "a92f7dc89150b1511ad463c9bb11c44d1b307048",
                                      "title": "Five Iranians Detained on Spying For Israel, Britain and Germany",
                                      "url": "https://www.albawaba.com/news/five-iranians-detained-spying-israel-britain-and-germany-1373870",
                                      "body": "Iran's Judiciary has confirmed that five Iranian nationals were recently detained on charges of spying for Israel, Britain and Germany, adding two of them have already been convicted.\n\nAddressing a news briefing on Tuesday, Judiciary Spokesman Gholamhossein Esmaili said “five Iranians who were spyin",
                                      "language": "en",
                                      "publisher": "Al-Bawaba",
                                      "published_date": "2020-08-11T11:56:00",
                                      "event_label": "Other Crime",
                                      "event_confidence": 0.6582143306732178
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Five Iranians Detained on Spying For Israel, Britain and Germany",
                      "score": 11,
                      "date": "2020-08-11T11:56:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Other Crime (65%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:tqTKBIwhk7pikV4zBQN2MAZJsfDJuJyRlmYI6WitdFk=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Asharq Al-awsat - English",
                              "url": "https://english.aawsat.com/home/article/2395011/bahrain-prosecution-issues-rulings-iranian-banks-over-money-laundering-charges"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-07-19_financial_crime_event#240",
                              "articles": [
                                  {
                                      "article_hash": "f1f673d5f42bac01454e7712ac0ed25ad901dd6d",
                                      "title": "Bahrain Prosecution Issues Rulings on Iranian Banks over Money-Laundering Charges",
                                      "url": "https://english.aawsat.com/home/article/2395011/bahrain-prosecution-issues-rulings-iranian-banks-over-money-laundering-charges",
                                      "body": "Manama – Asharq Al-Awsat\n\nBahrain’s High Criminal Court on Thursday sentenced three Iran-owned Future Bank officials to five years in jail and fined each with up to 1 million Bahraini dinars ($2.65 million) in two money-laundering cases, Bahrain News Agency reported.\n\nThe court also fined Future Ban",
                                      "language": "en",
                                      "publisher": "Asharq Al-awsat - English",
                                      "published_date": "2020-07-17T07:31:42",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.566050112247467
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain Prosecution Issues Rulings on Iranian Banks over Money-Laundering Charges",
                      "score": 11,
                      "date": "2020-07-17T07:31:42Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (56%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Nb6xn3lcxNNgfjBgIAGioGabaYM_IiOIlrm0QLF43y8=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Saudi Gazette",
                              "url": "https://www.saudigazette.com.sa/article/595596/World/Mena/Bahrain-fines-Iranian-banks-on-money-laundering-charges"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-07-19_regulatory_event#316",
                              "articles": [
                                  {
                                      "article_hash": "003c0ad219ce9ff3b0ed12be853cb7616de24801",
                                      "title": "Bahrain fines Iranian banks on money-laundering charges",
                                      "url": "https://www.saudigazette.com.sa/article/595596/World/Mena/Bahrain-fines-Iranian-banks-on-money-laundering-charges",
                                      "body": "Saudi Gazette report\n\nMANAMA — Bahrain’s High Criminal Court on Thursday sentenced three Iran-owned Future Bank officials to five years in jail and fined each with up to 1 million Bahraini dinars ($2.65 million) in two money-laundering cases, Bahrain News Agency reported.\n\nThe court also fined Futur",
                                      "language": "en",
                                      "publisher": "Saudi Gazette",
                                      "published_date": "2020-07-16T20:48:45",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.8619305491447449
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain fines Iranian banks on money-laundering charges",
                      "score": 11,
                      "date": "2020-07-16T20:48:45Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (86%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:wAxEDgqXal4IlO8_S_dxbLeclrlxB4j-vMAKR2tzmww=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Asharq Al-awsat - English",
                              "url": "https://english.aawsat.com/home/article/2342506/bahrain-fines-iranian-banks-over-illegal-activities"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-06-21_regulatory_event#93",
                              "articles": [
                                  {
                                      "article_hash": "94263e3bb97b71d49a9e6aa43c50db23f0e1343d",
                                      "title": "Bahrain Fines Iranian Banks over Illegal Activities",
                                      "url": "https://english.aawsat.com/home/article/2342506/bahrain-fines-iranian-banks-over-illegal-activities",
                                      "body": "Damam - Obaid al-Suheimy\n\nBahrain’s High Criminal Court has sentenced three Iran-owned Future Bank officials to five years in prison and fined each with up to BD1 million over the ten cases brought against them on charges of money laundering, funding terrorism and violating banking regulations in Ba",
                                      "language": "en",
                                      "publisher": "Asharq Al-awsat - English",
                                      "published_date": "2020-06-19T06:03:07",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.8957712054252625
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain Fines Iranian Banks over Illegal Activities",
                      "score": 11,
                      "date": "2020-06-19T06:03:07Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (89%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [],
              "company_registry": null,
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli",
              "entity_name": "Bank Melli",
              "aliases": [],
              "associations": {
                  "direct_owners": [],
                  "companies": [],
                  "people": []
              },
              "facet": "adverse_news",
              "strength": 1,
              "description": null,
              "source": {
                  "name": "Sigma News",
                  "key": "sigma_news",
                  "match_id": "231cafcd-00bd-4ad8-a9b9-c72d51eb172f",
                  "match_name": "Bank Melli",
                  "last_checked": "2022-11-09T19:48:44Z",
                  "strength": 1,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:bk5du8XadF1zcGQuquZOvRYSu7vDbSMov3EoLRJyoEQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "MENAFN.COM",
                              "url": "https://menafn.com/1105032237/ICCIMA-head-relies-on-trading-with-non-restricted-regions"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-10-16_regulatory_event#5720",
                              "articles": [
                                  {
                                      "article_hash": "db6511c545653d64a7c5843ba5d8e9e3f56a0c72",
                                      "title": "ICCIMA head relies on trading with non-restricted regions",
                                      "url": "https://menafn.com/1105032237/ICCIMA-head-relies-on-trading-with-non-restricted-regions",
                                      "body": "(MENAFN) Deputy chief of Iran Chamber of Commerce, Industries, Mines and Agriculture (ICCIMA) has underlined the importance of starting additional exchange offices in Europe and concentrating on non-restricted regions for the growth of exchange with the continent, the ICCIMA portal mentioned in a re",
                                      "language": "en",
                                      "publisher": "MENAFN.COM",
                                      "published_date": "2022-10-17T10:23:56",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.6292325258255005
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "ICCIMA head relies on trading with non-restricted regions",
                      "score": 11,
                      "date": "2022-10-17T10:23:56Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (62%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:aUKm4lEgCUvyW3Te8N7cPiayqdnZB0-JigaELSlyA1w=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tehran Times",
                              "url": "https://www.tehrantimes.com/news/477602/ICCIMA-stresses-opening-trade-offices-in-Europe"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-10-16_location_change_event#3199",
                              "articles": [
                                  {
                                      "article_hash": "ff49c4447bb9c7263a27c006759ab55b3dbd3384",
                                      "title": "ICCIMA stresses opening trade offices in Europe",
                                      "url": "https://www.tehrantimes.com/news/477602/ICCIMA-stresses-opening-trade-offices-in-Europe",
                                      "body": "TEHRAN – Deputy Head of Iran Chamber of Commerce, Industries, Mines and Agriculture (ICCIMA) has stressed the need for opening new trade offices in Europe and focusing on non-sanctioned areas for the expansion of trade with the continent, the ICCIMA portal reported.\n\nSpeaking in a meeting with heads",
                                      "language": "en",
                                      "publisher": "Tehran Times",
                                      "published_date": "2022-10-15T11:05:53",
                                      "event_label": "Location Change",
                                      "event_confidence": 0.8992194533348083
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "ICCIMA stresses opening trade offices in Europe",
                      "score": 11,
                      "date": "2022-10-15T11:05:53Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Location Change (89%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:3G-PCntis3YQKWaTdFSZfgs3NvjVJQsLCE2aPV4xMhA=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Forbes",
                              "url": "https://www.forbes.com/sites/dominicdudley/2022/09/29/iran-launches-central-bank-digital-currency-scheme-with-local-banks-and-shops/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-10-02_product_change_event#109",
                              "articles": [
                                  {
                                      "article_hash": "f87d853350f0b452fd0d7ad8f8db6a449ce4e0d3",
                                      "title": "Iran Launches Central Bank Digital Currency Scheme With Local Banks And Shops",
                                      "url": "https://www.forbes.com/sites/dominicdudley/2022/09/29/iran-launches-central-bank-digital-currency-scheme-with-local-banks-and-shops/",
                                      "body": "NurPhoto via Getty Images\n\nIran has begun experimenting with a central bank digital currency (CBDC), launching a pilot scheme in partnership with two local banks.\n\nThe launch of the Ramzrial (digital rial) by the Central Bank of Iran places the country among the digital currency frontrunners in the ",
                                      "language": "en",
                                      "publisher": "Forbes",
                                      "published_date": "2022-09-29T21:49:55",
                                      "event_label": "Product Change",
                                      "event_confidence": 0.939681351184845
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran Launches Central Bank Digital Currency Scheme With Local Banks And Shops",
                      "score": 11,
                      "date": "2022-09-29T21:49:55Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Product Change (93%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:pF92PoD8bkauX_0T3OfYitPNg3b3KjRZOe9hxC65zgQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Techworm",
                              "url": "https://www.techworm.net/2022/09/anonymous-hacked-national-bank-of-iran-bank-melli.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-09-25_technology_event_event#350",
                              "articles": [
                                  {
                                      "article_hash": "f3f505de558beca06013848cc7aaa514559a44f7",
                                      "title": "Anonymous Claims To Have Hacked The National Bank of Iran (Bank Melli)",
                                      "url": "https://www.techworm.net/2022/09/anonymous-hacked-national-bank-of-iran-bank-melli.html",
                                      "body": "The Anonymous hacktivist group says it has hacked the National Bank of Iran (Bank Melli) as part of its #OpIran against the Iranian government.\n\nAnonymous announced the hack on Twitter by sharing the screenshot of the administrator-level access of Bank Melli Iran.\n\nAt the time of writing, this artic",
                                      "language": "en",
                                      "publisher": "Techworm",
                                      "published_date": "2022-09-26T13:21:43",
                                      "event_label": "Technology Event",
                                      "event_confidence": 0.7327833771705627
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Anonymous Claims To Have Hacked The National Bank of Iran (Bank Melli)",
                      "score": 11,
                      "date": "2022-09-26T13:21:43Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Technology Event (73%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:xMCtamIgVYUnpU5zbYd_9mUiLuMhxL1I13NdOqrrtWI=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Iran Daily",
                              "url": "http://irandaily.ir/News/324257.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-09-18_regulatory_event#5251",
                              "articles": [
                                  {
                                      "article_hash": "eedaf3ef6a977a1d0b04357382d6fa9033ec3274",
                                      "title": "Will ICJ order release of Iranian assets frozen in U.S.?",
                                      "url": "http://irandaily.ir/News/324257.html",
                                      "body": "International Desk\n\nThe final hearing of the case related to the freezing and confiscation of the assets of Iran’s Central Bank, Bank Melli, and a number of other Iranian banks and companies by the U.S. administration and courts at the International Court of Justice (ICJ) in The Hague began on Monda",
                                      "language": "en",
                                      "publisher": "Iran Daily",
                                      "published_date": "2022-09-21T19:18:53",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.8350233435630798
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Will ICJ order release of Iranian assets frozen in U.S.?",
                      "score": 11,
                      "date": "2022-09-21T19:18:53Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (83%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:6JjtcYJujfYLDwlXkBJ41452AJdiZ_G9NPWHYtKfW8s=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Mehr News Agency - English Version",
                              "url": "https://en.mehrnews.com/news/191703/Iran-calls-on-ICJ-to-condemn-US-for-HR-intl-laws-violations"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-09-18_regulatory_event#4474",
                              "articles": [
                                  {
                                      "article_hash": "69b658e105b1f3ae74c965362220cd313bef1cf8",
                                      "title": "Iran calls on ICJ to condemn US for HR, intl. laws violations",
                                      "url": "https://en.mehrnews.com/news/191703/Iran-calls-on-ICJ-to-condemn-US-for-HR-intl-laws-violations",
                                      "body": "Speaking in an ICJ hearing on Wednesday, Iran’s representative Tavakol Habibzadeh pointed to the US's illegal actions against Iran, including the downing of an Iranian passenger plane over the Persian Gulf in 1988, the attack and destruction of Iran's facilities and oil rigs in the Persian Gulf duri",
                                      "language": "en",
                                      "publisher": "Mehr News Agency - English Version",
                                      "published_date": "2022-09-21T11:30:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.7339712977409363
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran calls on ICJ to condemn US for HR, intl. laws violations",
                      "score": 11,
                      "date": "2022-09-21T11:30:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (73%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:bBAcFGPsVWJmcu0yMbRsBbWsQor3wX6prQ0yJYBKVDQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "The Deep Dive",
                              "url": "https://thedeepdive.ca/hsbc-found-not-liable-for-2009-al-qaeda-bombing-at-cia-base/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-09-11_terrorism_event#989",
                              "articles": [
                                  {
                                      "article_hash": "758761d4a9e160c55b3d1200131b8bfc4755f374",
                                      "title": "HSBC Found Not Liable for 2009 Al-Qaeda Bombing at CIA Base",
                                      "url": "https://thedeepdive.ca/hsbc-found-not-liable-for-2009-al-qaeda-bombing-at-cia-base/",
                                      "body": "A US appeals court earlier this week ruled that HSBC (NYSE: HSBC) cannot be held liable for damages caused to families of two victims killed in an Al-Qaeda bombing attack, despite the bank circumventing US sanctions to provide financial services to Iranian and Saudi Arabian intermediary banks.\n\nAs f",
                                      "language": "en",
                                      "publisher": "The Deep Dive",
                                      "published_date": "2022-09-10T19:09:00",
                                      "event_label": "Terrorism",
                                      "event_confidence": 0.8794138431549072
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "HSBC Found Not Liable for 2009 Al-Qaeda Bombing at CIA Base",
                      "score": 11,
                      "date": "2022-09-10T19:09:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Terrorism (87%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:XDE1WzqHy8Vo0VWa9X2IZYN1Wk0wl-sS-t513HGDE0E=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Investing.com",
                              "url": "https://www.investing.com/news/stock-market-news/hsbc-not-liable-for-alqaeda-suicide-attack-at-cia-base-us-appeals-court-2886812"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-09-04_terrorism_event#11",
                              "articles": [
                                  {
                                      "article_hash": "2c4f8a4e84e4803bf11a2902c14487d7b76f5177",
                                      "title": "HSBC not liable for al-Qaeda suicide attack at CIA base -US appeals court By Reuters",
                                      "url": "https://www.investing.com/news/stock-market-news/hsbc-not-liable-for-alqaeda-suicide-attack-at-cia-base-us-appeals-court-2886812",
                                      "body": "© Reuters. FILE PHOTO: HSBC logo is seen on a branch bank in the financial district in New York, U.S., Aug. 7, 2019. REUTERS/Brendan McDermid/File Photo\n\nBy Jonathan Stempel\n\n(Reuters) - A divided U.S. appeals court on Tuesday said HSBC Holdings Plc (LON: ) was not liable to the families of two Amer",
                                      "language": "en",
                                      "publisher": "Investing.com",
                                      "published_date": "2022-09-06T17:40:00",
                                      "event_label": "Terrorism",
                                      "event_confidence": 0.7187773585319519
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "HSBC not liable for al-Qaeda suicide attack at CIA base -US appeals court By Reuters",
                      "score": 11,
                      "date": "2022-09-06T17:40:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Terrorism (71%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:516NR74qoFrd61KPhr53XjK4CiS6l_Sl3iWdyJx9vBQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Iran News Update",
                              "url": "https://irannewsupdate.com/news/economy/foulad-scandal-latest-instance-of-systematic-corruption-in-iran/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-08-28_financial_crime_event#693",
                              "articles": [
                                  {
                                      "article_hash": "185168cf37b0eded8b9fcb23445d88e9ff96cf10",
                                      "title": "Foulad Scandal, Latest Instance of Systematic Corruption in Iran",
                                      "url": "https://irannewsupdate.com/news/economy/foulad-scandal-latest-instance-of-systematic-corruption-in-iran/",
                                      "body": "As the majority of Iran’s population is failing to afford its essential expenses, the stellar Foulad Mobarakeh scandal in the country has shocked society. The company is the country’s largest steel company, with its headquarters being based in Isfahan’s central province.\n\nAt the peak of the economic",
                                      "language": "en",
                                      "publisher": "Iran News Update",
                                      "published_date": "2022-08-29T16:51:39",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.8861551880836487
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Foulad Scandal, Latest Instance of Systematic Corruption in Iran",
                      "score": 11,
                      "date": "2022-08-29T16:51:39Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (88%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:O-w6BPSXI86u-SsBxelmlaL80WXLoJRnJyZjTuro_zo=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "News Talk Florida",
                              "url": "https://www.newstalkflorida.com/featured/to-avoid-sanctions-countries-are-ditching-the-us-dollar/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-08-21_regulatory_event#4472",
                              "articles": [
                                  {
                                      "article_hash": "b4ea1aa6215739656b53ff16f7cd7c2a9e845989",
                                      "title": "To Avoid Sanctions, Countries Are Ditching The US Dollar",
                                      "url": "https://www.newstalkflorida.com/featured/to-avoid-sanctions-countries-are-ditching-the-us-dollar/",
                                      "body": "Micaela Burrow\n\nCountries are attempting to divest from the U.S. dollar as sanctions dig into Russian and Iranian economies, with the yuan, ruble and other currencies emerging as alternatives.\n\n\n\nRussia has found new buyers for its coal and petroleum exports in non-dollar denominated currencies, kee",
                                      "language": "en",
                                      "publisher": "News Talk Florida",
                                      "published_date": "2022-08-18T04:16:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.47956573963165283
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "To Avoid Sanctions, Countries Are Ditching The US Dollar",
                      "score": 11,
                      "date": "2022-08-18T04:16:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (47%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:xb-6uoqk2VALWtvlR8aRygOpYX2qILbi15Luamc4e7c=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Daily Caller",
                              "url": "https://dailycaller.com/2022/08/11/sanctions-countries-ditching-us-dollar/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-08-14_regulatory_event#3986",
                              "articles": [
                                  {
                                      "article_hash": "b822ba84ca19debb90374f8a5491a5a54b14c5d3",
                                      "title": "To Avoid Sanctions, Countries Are Ditching The US Dollar",
                                      "url": "https://dailycaller.com/2022/08/11/sanctions-countries-ditching-us-dollar/",
                                      "body": "Countries are attempting to divest from the U.S. dollar as sanctions dig into Russian and Iranian economies, with the yuan, ruble and other currencies emerging as alternatives.\n\nRussia has found new buyers for its coal and petroleum exports in non-dollar denominated currencies, keeping its economy a",
                                      "language": "en",
                                      "publisher": "Daily Caller",
                                      "published_date": "2022-08-11T21:49:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.47956573963165283
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "To Avoid Sanctions, Countries Are Ditching The US Dollar",
                      "score": 11,
                      "date": "2022-08-11T21:49:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (47%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:o4gY-fNzjD_YcZjyt0epb50R8I0aSxwY-8tdQeild8s=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Iran Daily",
                              "url": "http://irandaily.ir/News/323262.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-07-31_location_change_event#1037",
                              "articles": [
                                  {
                                      "article_hash": "9c17b89ac1f817c7d529f7726485cd6f35a9e90e",
                                      "title": "$18b MoU signed to boost Iran refining capacity by 600,000 bpd",
                                      "url": "http://irandaily.ir/News/323262.html",
                                      "body": "Economic Desk\n\nA memorandum of understanding (MoU) worth $17.8 billion was signed in the presence of Iranian President Seyyed Ebrahim Raeisi, First Vice President Mohammad Mokhber and Oil Minister Javad Owji on Monday to construct two refineries with a total capacity of 600,000 barrels per day.\n\nIn ",
                                      "language": "en",
                                      "publisher": "Iran Daily",
                                      "published_date": "2022-08-01T19:14:25",
                                      "event_label": "Location Change",
                                      "event_confidence": 0.8633490800857544
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "$18b MoU signed to boost Iran refining capacity by 600,000 bpd",
                      "score": 11,
                      "date": "2022-08-01T19:14:25Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Location Change (86%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:8Nin3928ydHK3bz1vFIN1maPekzUnvYZrh3g-BrO1Dg=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tasnim News Agency",
                              "url": "https://www.tasnimnews.com/en/news/2022/07/27/2749047/iran-russia-weigh-plans-for-joint-interbank-payment-system"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-07-24_product_change_event#385",
                              "articles": [
                                  {
                                      "article_hash": "f056060f3d3a994528f429dd6949effa8049b68e",
                                      "title": "Iran, Russia Weigh Plans for Joint Interbank Payment System",
                                      "url": "https://www.tasnimnews.com/en/news/2022/07/27/2749047/iran-russia-weigh-plans-for-joint-interbank-payment-system",
                                      "body": "In an interview with Sputnik, Safari said, “Naturally, two countries that want to dedollarize their transactions must have a special system similar to SWIFT. The Iranian and Russian sides each proposed one version of such a system. Now, we have practically reached a very good agreement, on the basis",
                                      "language": "en",
                                      "publisher": "Tasnim News Agency",
                                      "published_date": "2022-07-27T08:59:00",
                                      "event_label": "Product Change",
                                      "event_confidence": 0.9332897663116455
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran, Russia Weigh Plans for Joint Interbank Payment System",
                      "score": 11,
                      "date": "2022-07-27T08:59:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Product Change (93%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:El_z6AE8aGhDvy_TGkzj8y9P_GTZHGVDEDaOZEwaTGw=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Republic World",
                              "url": "https://www.republicworld.com/world-news/middle-east/iran-launches-trading-in-rial-ruble-ahead-of-russian-president-vladimir-putins-visit-articleshow.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-07-17_product_change_event#648",
                              "articles": [
                                  {
                                      "article_hash": "85b151e672f04bf6ee561a839de2ea7e867cf061",
                                      "title": "Iran launches trading in Rial-Ruble ahead of Russian President Vladimir Putin's visit",
                                      "url": "https://www.republicworld.com/world-news/middle-east/iran-launches-trading-in-rial-ruble-ahead-of-russian-president-vladimir-putins-visit-articleshow.html",
                                      "body": "The governor of Iran's Central Bank announced on Tuesday that the country's exchange launched trading in Iranian Rial-Russian ruble. According to reports, this development comes ahead of Russian President Vladimir Putin's visit to Iran to discuss an UN-backed proposal to unblock exports of Ukrainian",
                                      "language": "en",
                                      "publisher": "Republic World",
                                      "published_date": "2022-07-19T11:47:00",
                                      "event_label": "Product Change",
                                      "event_confidence": 0.8422378301620483
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran launches trading in Rial-Ruble ahead of Russian President Vladimir Putin's visit",
                      "score": 11,
                      "date": "2022-07-19T11:47:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Product Change (84%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:BpGdcJLSYmCJ6fJWUe4ESFv5Qwyp5Oe-Uc9EtiRmvao=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Press TV",
                              "url": "https://www.presstv.ir/Detail/2022/07/16/685730/Iran-Bank-Melli-Russia-Sberbank-MoUs"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-07-17_ownership_change_event#3232",
                              "articles": [
                                  {
                                      "article_hash": "b50da768fa100bd9a95eb04245a44d9fb664bd2e",
                                      "title": "Iran's Bank Melli and Russia's Sberbank sign MoUs",
                                      "url": "https://www.presstv.ir/Detail/2022/07/16/685730/Iran-Bank-Melli-Russia-Sberbank-MoUs",
                                      "body": "Iran’s largest lender Bank Melli has signed some major memoranda of understanding (MoUs) with Russia’s largest bank, Sberbank, amid efforts by Iran and Russia to boost their banking and trade ties.\n\nBank Melli’s CEO Mohammad Reza Farzin said in a tweet on Saturday that he had signed the MoUs with Sb",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2022-07-16T16:49:00",
                                      "event_label": "Ownership Change",
                                      "event_confidence": 0.9760608077049255
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran's Bank Melli and Russia's Sberbank sign MoUs",
                      "score": 11,
                      "date": "2022-07-16T16:49:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Ownership Change (97%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:x72dZ9rONrNhGzukht6GEmUiZeabEUMiyqbiXXwcBX4=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Press TV",
                              "url": "https://www.presstv.ir/Detail/2022/07/05/685106/Iran-Azadegan-oilfield-development-contract-signing"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-07-03_location_change_event#4576",
                              "articles": [
                                  {
                                      "article_hash": "56364965d3343a1c1486942cf8b13dc057978298",
                                      "title": "Iran awards $7bn oilfield contract to domestic consortium",
                                      "url": "https://www.presstv.ir/Detail/2022/07/05/685106/Iran-Azadegan-oilfield-development-contract-signing",
                                      "body": "Iran has awarded a major oilfield development contract to a consortium of local banks and petroleum companies.\n\nIranian President Ebrahim Raeisi on Tuesday oversaw the signing of the contract to develop Azadegan oilfield with a total investment value of $7 billion, said a report by the office of the",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2022-07-05T16:50:00",
                                      "event_label": "Location Change",
                                      "event_confidence": 0.8377159833908081
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran awards $7bn oilfield contract to domestic consortium",
                      "score": 11,
                      "date": "2022-07-05T16:50:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Location Change (83%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:7YTNBMAnA-jpzRukyq4CJJ-1K_yKdCggDD8KDsxcSlA=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Press TV",
                              "url": "https://www.presstv.ir/Detail/2022/07/02/684924/Iran-banking-services-restrictions-foreign-nationals-CBI"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-07-03_regulatory_event#1194",
                              "articles": [
                                  {
                                      "article_hash": "ba34a265a107e23281ce7112df5609624a0dc61f",
                                      "title": "Iran's central bank limits access of foreigners to banking services",
                                      "url": "https://www.presstv.ir/Detail/2022/07/02/684924/Iran-banking-services-restrictions-foreign-nationals-CBI",
                                      "body": "The Central Bank of Iran (CBI) has confirmed reports it has restricted the access of foreign nationals living in the country to various banking services.\n\nA CBI spokesman said in a Saturday tweet that banks in Iran will only process transactions of up to 100 million rials ($305) per day by foreign n",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2022-07-02T16:42:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.914770781993866
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran's central bank limits access of foreigners to banking services",
                      "score": 11,
                      "date": "2022-07-02T16:42:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (91%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:YNlcCij6RQNtvYvpp6ik38GJo3kFBWAb4rh_PrNpNjI=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Iran Front Page - IFP News",
                              "url": "https://ifpnews.com/irib-ceo-iran-leader-police-bank-burglars/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-19_violent_crime_event#2908",
                              "articles": [
                                  {
                                      "article_hash": "5cf0586db4cb3674754c75cf61a9b2ffbc2c8399",
                                      "title": "IRIB CEO Apologizes To Iran’s Leader For Coverage Of Police Arrest Of Bank Burglars - Iran Front Page",
                                      "url": "https://ifpnews.com/irib-ceo-iran-leader-police-bank-burglars/",
                                      "body": "Peyman Jebelli’s letter said that the IRIB staff took upon Ayatollah Khamenei’s complaint and advice wholeheartedly. The letter added that the IRIB will redress its mistake and that it is ready to “follow Your Excellency’s warnings and guidelines.”\n\nEarlier, referring to the bank robbery, Ayatollah ",
                                      "language": "en",
                                      "publisher": "Iran Front Page - IFP News",
                                      "published_date": "2022-06-21T17:36:00",
                                      "event_label": "Violent Crime",
                                      "event_confidence": 0.7905319333076477
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "IRIB CEO Apologizes To Iran’s Leader For Coverage Of Police Arrest Of Bank Burglars - Iran Front Page",
                      "score": 11,
                      "date": "2022-06-21T17:36:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Violent Crime (79%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:O9Xavrk3RXSe1LnXUuQVzf3AXHASzzPKiYF4P6VT1O0=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tehran Times",
                              "url": "https://www.tehrantimes.com/news/473845/BMI-Finances-Miyaneh-Ardabil-Railway"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-19_ownership_change_event#1134",
                              "articles": [
                                  {
                                      "article_hash": "fb966d857e24b2a9ba3f34bd8651149064cf2790",
                                      "title": "BMI Finances Miyaneh - Ardabil Railway",
                                      "url": "https://www.tehrantimes.com/news/473845/BMI-Finances-Miyaneh-Ardabil-Railway",
                                      "body": "Miyaneh - Ardabil Railway is the largest infrastructural project in the country that has been financed by Bank Melli Iran (BMI).\n\nAccording to the Public Relations Department of BMI, the construction operation of this giant railway project, as long as 175 km, started in 2018, and construction operat",
                                      "language": "en",
                                      "publisher": "Tehran Times",
                                      "published_date": "2022-06-20T10:18:02",
                                      "event_label": "Ownership Change",
                                      "event_confidence": 0.9606124758720398
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "BMI Finances Miyaneh - Ardabil Railway",
                      "score": 11,
                      "date": "2022-06-20T10:18:02Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Ownership Change (96%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:yjQgU9sUY7vJ_BtJfLkadxGq4H_NjGlil_CxWCoPP4o=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Iran Focus",
                              "url": "https://www.iranfocus.com/en/economy/48785-bank-robbery-at-tehrans-most-secure-zone-in-bright-day/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-12_violent_crime_event#1067",
                              "articles": [
                                  {
                                      "article_hash": "cc853611de95c13d5f6dc3d322f1c1377c2bca28",
                                      "title": "Bank Robbery at Tehran’s Most Secure Zone in Bright Daylight",
                                      "url": "https://www.iranfocus.com/en/economy/48785-bank-robbery-at-tehrans-most-secure-zone-in-bright-day/",
                                      "body": "— “Professional robbers stole more than 160 safe boxes” at a branch of the Bank Melli, authorities say.\n\n— The state-run TV says that the robbery took place on holiday while the holidays ended on Sunday, June 5—unless it had happened before, and the regime had concealed it.\n\n— The bank is located in",
                                      "language": "en",
                                      "publisher": "Iran Focus",
                                      "published_date": "2022-06-14T17:27:41",
                                      "event_label": "Violent Crime",
                                      "event_confidence": 0.8317073583602905
                                  },
                                  {
                                      "article_hash": "30b3b8cde8a8ccbf0be504c492d69a18c2d7bbb8",
                                      "title": "Bank Robbery at Tehran’s Most Secure Zone in Bright Day",
                                      "url": "https://www.iranfocus.com/en/economy/48785-bank-robbery-at-tehrans-most-secure-zone-in-bright-day/",
                                      "body": "— “Professional robbers stole more than 160 safe boxes” at a branch of the Bank Melli, authorities say.\n\n— The state-run TV says that the robbery took place on holiday while the holidays ended on Sunday, June 5—unless it had happened before, and the regime had concealed it.\n\n— The bank is located in",
                                      "language": "en",
                                      "publisher": "Iran Focus",
                                      "published_date": "2022-06-14T17:27:41",
                                      "event_label": "Violent Crime",
                                      "event_confidence": 0.8330873250961304
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Robbery at Tehran’s Most Secure Zone in Bright Daylight",
                      "score": 11,
                      "date": "2022-06-14T17:27:41Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Violent Crime (83%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:WwaFttgRx2zGxfbo72WuXeNNrHInWy-6ATDLVAxUxHU=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "The National",
                              "url": "https://t.co/I7JFtym5hB"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-12_other_crime_event#1938",
                              "articles": [
                                  {
                                      "article_hash": "90103cc6787ab2c23d35ad6c1a52e7d7c2133c6e",
                                      "title": "Iran bank heist: 13 arrested after 168 deposit boxes stolen",
                                      "url": "https://t.co/I7JFtym5hB",
                                      "body": "Iranian authorities said on Friday they had arrested 13 burglars who cut into the vault of the government-owned Bank Melli from a neighbouring building and stole 168 safe deposit boxes.\n\nThree of the suspects were arrested in undisclosed countries abroad and the rest were caught in the Iranian capit",
                                      "language": "en",
                                      "publisher": "The National",
                                      "published_date": "2022-06-10T15:49:57",
                                      "event_label": "Other Crime",
                                      "event_confidence": 0.7963337898254395
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran bank heist: 13 arrested after 168 deposit boxes stolen",
                      "score": 11,
                      "date": "2022-06-10T15:49:57Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Other Crime (79%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Dk1Y4pBfiMC0jUBlp73yNztyYcrIIrfSNwD53jpougA=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tasnim News Agency",
                              "url": "https://www.tasnimnews.com/en/news/2022/06/10/2726539/police-arrests-13-burglars-of-bank-melli-iran"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-12_violent_crime_event#1537",
                              "articles": [
                                  {
                                      "article_hash": "92ba38011ed2422115f896a035ace87c3ccffcad",
                                      "title": "Police Arrests 13 Burglars of Bank Melli Iran",
                                      "url": "https://www.tasnimnews.com/en/news/2022/06/10/2726539/police-arrests-13-burglars-of-bank-melli-iran",
                                      "body": "Several of the burglars of the Bank's safe deposit boxes fled to \"Turkey,\" after the robbery, but were apprehended by Turkish police and returned to Iran two days ago, according to Hassan Mounesan a Member of the Board of Directors of Bank Melli.\n\nMany of the 168 rented safe boxes that had been brok",
                                      "language": "en",
                                      "publisher": "Tasnim News Agency",
                                      "published_date": "2022-06-10T07:29:00",
                                      "event_label": "Violent Crime",
                                      "event_confidence": 0.8211087584495544
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Police Arrests 13 Burglars of Bank Melli Iran",
                      "score": 11,
                      "date": "2022-06-10T07:29:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Violent Crime (82%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:fw8mQ1bOPU17XYJZ0IxDg74dv2dFzikLi88lqts8ClU=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tasnim News Agency",
                              "url": "https://www.tasnimnews.com/en/news/2022/06/10/2726539/police-arrests-burglars-of-bank-melli-iran"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-12_violent_crime_event#2956",
                              "articles": [
                                  {
                                      "article_hash": "35b64de8b8395d6fb2cc6112599facf0027d9a03",
                                      "title": "Police Arrests Burglars of Bank Melli Iran",
                                      "url": "https://www.tasnimnews.com/en/news/2022/06/10/2726539/police-arrests-burglars-of-bank-melli-iran",
                                      "body": "Several of the burglars of the Bank's safe deposit boxes fled to \"Turkey,\" after the robbery, but were apprehended by Turkish police and returned to Iran two days ago, according to Hassan Mounesan a Member of the Board of Directors of Bank Melli.\n\nMany of the 168 rented safe boxes that had been brok",
                                      "language": "en",
                                      "publisher": "Tasnim News Agency",
                                      "published_date": "2022-06-10T07:29:00",
                                      "event_label": "Violent Crime",
                                      "event_confidence": 0.8062008023262024
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Police Arrests Burglars of Bank Melli Iran",
                      "score": 11,
                      "date": "2022-06-10T07:29:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Violent Crime (80%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:XxGqmtykg2Xt9VrwXr6m-RiBKWS8Rh1_7mildseaOdY=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "ایران اینترنشنال",
                              "url": "https://www.iranintl.com/en/202206087285"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-05_other_crime_event#2481",
                              "articles": [
                                  {
                                      "article_hash": "33e180f9728f452738fb5f1dc94f7450bf9f4f8d",
                                      "title": "Police Fire In The Air To Disperse Victims Of The Biggest Bank Heist In Iran",
                                      "url": "https://www.iranintl.com/en/202206087285",
                                      "body": "Police resorted to force Wednesday to break up a protest rally by people whose safety deposit boxes were robbed in a bank heist in a central Tehran branch of Iran’s largest bank.\n\nAccording to footage circulating in social media, security forces fired warning shots and used violence to disperse the ",
                                      "language": "en",
                                      "publisher": "ایران اینترنشنال",
                                      "published_date": "2022-06-08T23:18:25",
                                      "event_label": "Other Crime",
                                      "event_confidence": 0.6845449805259705
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Police Fire In The Air To Disperse Victims Of The Biggest Bank Heist In Iran",
                      "score": 11,
                      "date": "2022-06-08T23:18:25Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Other Crime (68%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:RGtRSEc-DI3grq12v3fMYaQO6i106h9ftcHNqBs4WLg=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Al Arabiya English",
                              "url": "https://english.alarabiya.net/News/middle-east/2022/06/07/Thieves-stage-Hollywood-type-heist-escape-with-safe-boxes-from-Bank-Melli-in-Iran"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-06-05_other_crime_event#1567",
                              "articles": [
                                  {
                                      "article_hash": "ef6ce0641fc1c9cb978743c0a4086cacbeece916",
                                      "title": "Thieves stage Hollywood-type heist, escape with safe boxes from Bank Melli in Iran",
                                      "url": "https://english.alarabiya.net/News/middle-east/2022/06/07/Thieves-stage-Hollywood-type-heist-escape-with-safe-boxes-from-Bank-Melli-in-Iran",
                                      "body": "Thieves stage Hollywood-type heist, escape with safe boxes from Bank Melli in Iran AFP\n\nThieves broke into more than 160 safe boxes at a branch of Iran’s biggest bank and made off with the contents, the bank said on Tuesday.\n\nState-owned Bank Melli said on its website that 168 rented safe boxes had ",
                                      "language": "en",
                                      "publisher": "Al Arabiya English",
                                      "published_date": "2022-06-07T14:15:00",
                                      "event_label": "Other Crime",
                                      "event_confidence": 0.7969964742660522
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Thieves stage Hollywood-type heist, escape with safe boxes from Bank Melli in Iran",
                      "score": 11,
                      "date": "2022-06-07T14:15:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Other Crime (79%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:xldBAPN7MsvJGExTevOOCFX2x5EJW3fDpn1hpt303D4=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "JD Supra",
                              "url": "https://www.jdsupra.com/legalnews/cjeu-makes-first-judgment-interpreting-1665072/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-04-03_legal_risk_event#2603",
                              "articles": [
                                  {
                                      "article_hash": "0bb25ed91b2c2d9429b23a6f7fc0f5af9085e474",
                                      "title": "CJEU Makes First Judgment Interpreting EU Blocking Regulation",
                                      "url": "https://www.jdsupra.com/legalnews/cjeu-makes-first-judgment-interpreting-1665072/",
                                      "body": "In Short\n\nThe Situation: The Grand Chamber of the Court of Justice of the European Union (\"CJEU\") has recently and for the first time given its opinion on interpretation and application of the EU Blocking Statute.\n\nThe Result: Partially deviating from the opinion of the Advocate General, the CJEU ad",
                                      "language": "en",
                                      "publisher": "JD Supra",
                                      "published_date": "2022-04-01T19:51:27",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9167413711547852
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "CJEU Makes First Judgment Interpreting EU Blocking Regulation",
                      "score": 11,
                      "date": "2022-04-01T19:51:27Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (91%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:E25Sw7II0hVU3rs3ZCvLnfBqH2tPaCsqftDsJ7EWqj0=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Financial Tribune",
                              "url": "https://financialtribune.com/articles/business-and-markets/112268/bank-melli-denies-data-breach"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2022-01-30_technology_event_event#624",
                              "articles": [
                                  {
                                      "article_hash": "db143ddf6aa75906464d00872d26b152ede88126",
                                      "title": "Bank Melli Denies Data Breach",
                                      "url": "https://financialtribune.com/articles/business-and-markets/112268/bank-melli-denies-data-breach",
                                      "body": "",
                                      "language": "en",
                                      "publisher": "Financial Tribune",
                                      "published_date": "2022-01-27T00:28:54",
                                      "event_label": "Technology Event",
                                      "event_confidence": 0.8274931311607361
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Denies Data Breach",
                      "score": 11,
                      "date": "2022-01-27T00:28:54Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Technology Event (82%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:NdObk3qOZ38NPxZ8gJcaFxqGjlGuzKe_ForviqyViTc=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "JD Supra",
                              "url": "https://www.jdsupra.com/legalnews/extraterritorial-u-s-sanctions-and-eu-7536261/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-12-19_regulatory_event#2989",
                              "articles": [
                                  {
                                      "article_hash": "c2a9686f83ecca671c44dd11a9fb0bccae3919a6",
                                      "title": "Extraterritorial U.S. Sanctions and EU Blocking Rules: Damned If You Do, Damned If You Don’t",
                                      "url": "https://www.jdsupra.com/legalnews/extraterritorial-u-s-sanctions-and-eu-7536261/",
                                      "body": "[co-authors: Irene Polieri and Raza Nazar]\n\nCourt of Justice of the European Union sets Binding Rules on the Contractual Impact of the EU Blocking Regulation\n\nThe EU Blocking Regulation (the “Regulation”)1 prohibits compliance by EU persons with certain U.S. sanctions against Cuba and Iran. It parti",
                                      "language": "en",
                                      "publisher": "JD Supra",
                                      "published_date": "2021-12-22T23:01:30",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.8162691593170166
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Extraterritorial U.S. Sanctions and EU Blocking Rules: Damned If You Do, Damned If You Don’t",
                      "score": 11,
                      "date": "2021-12-22T23:01:30Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (81%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:9wap5XiBnIR9g3RdkvvbwVt96BiexczVNSf-HKxqLtE=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Reuters",
                              "url": "https://t.co/GWlFiCBVcU"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-12-19_legal_risk_event#749",
                              "articles": [
                                  {
                                      "article_hash": "ef18bf2fa40b41a83ebf3cb44be0564f80079726",
                                      "title": "EU firms can scrap Iran deals if U.S. sanctions' costs too high, EU top court says",
                                      "url": "https://t.co/GWlFiCBVcU",
                                      "body": "The entrance of the European Court of Justice is pictured in Luxembourg, January 26, 2017. REUTERS/Francois Lenoir/File Photo\n\nDec 21 (Reuters) - European companies can end contracts with Iranian firms pressured by U.S. sanctions if upholding the deals would lead to \"disproportionate economic loss,\"",
                                      "language": "en",
                                      "publisher": "Reuters",
                                      "published_date": "2021-12-21T11:32:24",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9108216166496277
                                  },
                                  {
                                      "article_hash": "d250925d49ae976f7e3785c19c164242570e64ab",
                                      "title": "EU firms can scrap Iran deals if US sanctions' costs too high, EU top court says | Law-Order",
                                      "url": "https://www.devdiscourse.com/article/law-order/1855842-eu-firms-can-scrap-iran-deals-if-us-sanctions-costs-too-high-eu-top-court-says",
                                      "body": "European companies can end contracts with Iranian firms pressured by U.S. sanctions if upholding the deals would lead to \"disproportionate economic loss,\" the EU's top court said on Tuesday. The judgment from the European Court of Justice (ECJ) in Luxembourg was prompted by a lawsuit from the German",
                                      "language": "en",
                                      "publisher": "Devdiscourse",
                                      "published_date": "2021-12-21T11:03:48",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.8787767887115479
                                  },
                                  {
                                      "article_hash": "bd8e464df69a56c944e3b7cef9bfe8dc0f1d528c",
                                      "title": "EU's top court allows European firms to scrap Iran deals",
                                      "url": "https://www.presstv.ir/Detail/2021/12/22/673179/EU-court-Iran-deals-Deutsche-Telekom-Bank-Melli",
                                      "body": "The EU's supreme court has intervened to protect European companies against legal action by Iran for failing to fulfill their contractual obligations.\n\nThe European Court of Justice (ECJ) in Luxembourg has ruled that EU companies can end contracts with Iranian firms if upholding the deals would lead",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2021-12-22T11:13:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9504678845405579
                                  },
                                  {
                                      "article_hash": "826085c9b6a300466c1f5cea8c4776d996624b7d",
                                      "title": "EU top court allows European firms to scrap Iran deals",
                                      "url": "https://www.presstv.ir/Detail/2021/12/22/673179/EU-court-Iran-deals-Deutsche-Telekom-Bank-Melli",
                                      "body": "The EU's supreme court has intervened to protect European companies against legal action by Iran for failing to fulfill their contractual obligations.\n\nThe European Court of Justice (ECJ) in Luxembourg has ruled that EU companies can end contracts with Iranian firms if upholding the deals would lead",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2021-12-22T11:11:14",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9501553177833557
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "EU firms can scrap Iran deals if U.S. sanctions' costs too high, EU top court says",
                      "score": 11,
                      "date": "2021-12-21T11:32:24Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (91%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:wPHJFtV0XFtK-E67MW56tzsEhTjqDcbXsBo6XomthWU=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Investment Arbitration Reporter (IAReporter)",
                              "url": "https://www.iareporter.com/articles/revealed-a-comprehensive-account-of-the-heretofore-unpublished-bank-melli-v-bahrain-award-some-details-have-leaked-but-review-of-award-gives-full-picture-of-tribunals-findings-on-iranian/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-12-12_legal_risk_event#67",
                              "articles": [
                                  {
                                      "article_hash": "02965c517cda96f40e27e61d5a49d44db983de8a",
                                      "title": "Revealed: A comprehensive account of the heretofore unpublished Bank Melli v. Bahrain award; some details have leaked, but review of award gives full picture of tribunal's findings on Iranian sanctions questions, political expropriation, and potential set",
                                      "url": "https://www.iareporter.com/articles/revealed-a-comprehensive-account-of-the-heretofore-unpublished-bank-melli-v-bahrain-award-some-details-have-leaked-but-review-of-award-gives-full-picture-of-tribunals-findings-on-iranian/",
                                      "body": "",
                                      "language": "en",
                                      "publisher": "Investment Arbitration Reporter (IAReporter)",
                                      "published_date": "2021-12-14T21:28:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.8430421948432922
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Revealed: A comprehensive account of the heretofore unpublished Bank Melli v. Bahrain award; some details have leaked, but review of award gives full picture of tribunal's findings on Iranian sanctions questions, political expropriation, and potential set",
                      "score": 11,
                      "date": "2021-12-14T21:28:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (84%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:_IFe9xUvMLLBuzth2zWhKk10TTgV4fwmWuhBQRbRZUI=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Business Recorder",
                              "url": "https://www.brecorder.com/news/40136506"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-11-28_legal_risk_event#1885",
                              "articles": [
                                  {
                                      "article_hash": "ec7199db855821fb82c3cca43f3adb29e0f89798",
                                      "title": "Iran banks hail arbitration panel win over Bahrain",
                                      "url": "https://www.brecorder.com/news/40136506",
                                      "body": "TEHRAN: Two leading Iranian banks have welcomed a decision by a Hague-based tribunal to order Bahrain to pay them more than $270 million in compensation for its 2015 closure of a bank they had supported.\n\nThe November 9 ruling from the Permanent Court of Arbitration found that reporting failures tha",
                                      "language": "en",
                                      "publisher": "Business Recorder",
                                      "published_date": "2021-11-29T01:03:41",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9554778337478638
                                  },
                                  {
                                      "article_hash": "67cb3f9eba6a9470a626f1411bf63cc4585f8070",
                                      "title": "Iran banks hail arbitration panel win over Bahrain",
                                      "url": "https://www.macaubusiness.com/iran-banks-hail-arbitration-panel-win-over-bahrain/",
                                      "body": "Two leading Iranian banks have welcomed a decision by a Hague-based tribunal to order Bahrain to pay them more than $270 million in compensation for its 2015 closure of a bank they had supported.\n\nThe November 9 ruling from the Permanent Court of Arbitration found that reporting failures that Bahrai",
                                      "language": "en",
                                      "publisher": "Macau Business",
                                      "published_date": "2021-11-28T13:55:27",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9554778337478638
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran banks hail arbitration panel win over Bahrain",
                      "score": 11,
                      "date": "2021-11-29T01:03:41Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:OeuCwucxXqaf9mNNMQDhdGbBrfYlrfaH70NNqlowu9A=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tehran Times",
                              "url": "https://www.tehrantimes.com/news/467381/Bahrain-sentenced-to-unfreeze-Iranian-assets-pay-240-million"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-11-21_regulatory_event#2814",
                              "articles": [
                                  {
                                      "article_hash": "54db46fc56fbca56e53e5c6c038609fea9b6b929",
                                      "title": "Bahrain sentenced to unfreeze Iranian assets, pay $240 million in fine",
                                      "url": "https://www.tehrantimes.com/news/467381/Bahrain-sentenced-to-unfreeze-Iranian-assets-pay-240-million",
                                      "body": "TEHRAN — In an exclusive interview with the Tehran Times on Wednesday, Abbas Honarmand, the deputy director of communications and information at the presidential office, said that an international arbitral tribunal has unanimously ordered Bahrain to pay compensation to Bank Saderat and Bank Melli Ir",
                                      "language": "en",
                                      "publisher": "Tehran Times",
                                      "published_date": "2021-11-24T17:26:15",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.923495888710022
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain sentenced to unfreeze Iranian assets, pay $240 million in fine",
                      "score": 11,
                      "date": "2021-11-24T17:26:15Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (92%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:PWBMl2Mb910hnAR8S76ovvWDZgkut8lgcTzWumCHFDI=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tehran Times",
                              "url": "https://www.tehrantimes.com/news/467381/Bahrain-sentenced-to-release-1-7-billion-of-Iranian-funds"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-11-21_financial_crime_event#265",
                              "articles": [
                                  {
                                      "article_hash": "284f9a87dab5fc72cc82552c00324b43d8430c64",
                                      "title": "Bahrain sentenced to release $1.7 billion of Iranian funds",
                                      "url": "https://www.tehrantimes.com/news/467381/Bahrain-sentenced-to-release-1-7-billion-of-Iranian-funds",
                                      "body": "TEHRAN — In an exclusive interview with the Tehran Times on Wednesday, Abbas Honarmand, the deputy director of communications and information at the presidential office, said that an international arbitral tribunal has unanimously ordered Bahrain to pay compensation to Bank Saderat and Bank Melli Ir",
                                      "language": "en",
                                      "publisher": "Tehran Times",
                                      "published_date": "2021-11-24T13:42:58",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.8800554871559143
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain sentenced to release $1.7 billion of Iranian funds",
                      "score": 11,
                      "date": "2021-11-24T13:42:58Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (88%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:4KPxFvPZFSGI3v_bPPsidEwBM09n9y3fvz0cYFoeli4=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Press TV",
                              "url": "https://www.presstv.ir/Detail/2021/11/24/671282/Iran-court-of-arbitration-Bahrain-bank"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-11-21_legal_risk_event#202",
                              "articles": [
                                  {
                                      "article_hash": "0deafe61cdb3789d8ce535b104a2168037c5c6e8",
                                      "title": "Court orders Bahrain to pay damages to Iran for 'political expropriation'",
                                      "url": "https://www.presstv.ir/Detail/2021/11/24/671282/Iran-court-of-arbitration-Bahrain-bank",
                                      "body": "Bahrain has been ordered by the Permanent Court of Arbitration in The Hague to pay over 200 million euros in damages plus costs to two Iranian banks for the unlawful expropriation of their banking venture in Manama in an act of \"political retribution\".\n\nIran’s largest lenders Bank Melli and Bank Sad",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2021-11-24T11:37:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9508326649665833
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Court orders Bahrain to pay damages to Iran for 'political expropriation'",
                      "score": 11,
                      "date": "2021-11-24T11:37:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:wCUNUsYGgsGcWsKEbYFgNl1z8OVMrwylbTQV3BmCPbc=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "News of Bahrain- DT News",
                              "url": "https://www.newsofbahrain.com/bahrain/76404.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-10-31_legal_risk_event#2527",
                              "articles": [
                                  {
                                      "article_hash": "15358e8338c663e82a92680d886596fe38b669e4",
                                      "title": "Bahrain High Court of Appeal upholds ruling against Future Bank and officials, Central Bank of Iran and other Iranian banks | THE DAILY TRIBUNE | KINGDOM OF BAHRAIN",
                                      "url": "https://www.newsofbahrain.com/bahrain/76404.html",
                                      "body": "TDT | Manama\n\nThe Daily Tribune – www.newsofbahrain.com\n\nThe Bahrain High Court of Appeal upholds the ruling issued in the largest money laundering case in the history of the Kingdom of Bahrain, convicting Future Bank (FB), six of its officials, the Central Bank of Iran (CBI) and other Iranian banks",
                                      "language": "en",
                                      "publisher": "News of Bahrain- DT News",
                                      "published_date": "2021-10-31T09:00:43",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9572928547859192
                                  },
                                  {
                                      "article_hash": "41f226d6cf1bee7a8bf66bf4857174f61fa69347",
                                      "title": "Bahrain High Court of Appeal upholds ruling against Future Bank and officials, Central Bank of Iran and other Iranian banks",
                                      "url": "https://www.newsofbahrain.com/bahrain/76404.html",
                                      "body": "TDT | Manama\n\nThe Daily Tribune – www.newsofbahrain.com\n\nThe Bahrain High Court of Appeal upholds the ruling issued in the largest money laundering case in the history of the Kingdom of Bahrain, convicting Future Bank (FB), six of its officials, the Central Bank of Iran (CBI) and other Iranian banks",
                                      "language": "en",
                                      "publisher": "www.newsofbahrain.com",
                                      "published_date": "2021-10-31T00:00:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9562197327613831
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain High Court of Appeal upholds ruling against Future Bank and officials, Central Bank of Iran and other Iranian banks | THE DAILY TRIBUNE | KINGDOM OF BAHRAIN",
                      "score": 11,
                      "date": "2021-10-31T09:00:43Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:MShjn2vXZvy8dc7TlibURTIRx-TS3DcGib_Uj2DC8CQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Press TV",
                              "url": "https://www.presstv.ir/Detail/2021/10/23/669115/Iran-CEOs-Bank-Melli-Sepah-finnace-minister"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-10-24_leadership_change_event#2864",
                              "articles": [
                                  {
                                      "article_hash": "4bcacb029241ec2ae546f33d5a68a627411ce123",
                                      "title": "Iran's finance minister changes CEOs of two largest banks",
                                      "url": "https://www.presstv.ir/Detail/2021/10/23/669115/Iran-CEOs-Bank-Melli-Sepah-finnace-minister",
                                      "body": "Chief executive officers at Iran’s two largest banks have been changed as a new administrative government led by President Ebrahim Raeisi seeks major reforms in the banking system.\n\nMohammad Reza Farzin and Ayatollah Ebrahimi were appointed as CEOs of Bank Meli and Bank Sepah, respectively, on Satur",
                                      "language": "en",
                                      "publisher": "Press TV",
                                      "published_date": "2021-10-23T19:41:00",
                                      "event_label": "Leadership Change",
                                      "event_confidence": 0.9555661082267761
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran's finance minister changes CEOs of two largest banks",
                      "score": 11,
                      "date": "2021-10-23T19:41:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Leadership Change (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:kEeLWdqsRO3AvwU6fmAsVmQ9hMpIeneto5BkcershT8=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "UK Parents Lounge",
                              "url": "https://ukparentslounge.com/money-laundering-bafin-attacks-two-banks-economy/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-10-10_financial_crime_event#512",
                              "articles": [
                                  {
                                      "article_hash": "be41b9666c12b22057daf9b918521a2886b68026",
                                      "title": "Money laundering – Bafin attacks two banks – economy –",
                                      "url": "https://ukparentslounge.com/money-laundering-bafin-attacks-two-banks-economy/",
                                      "body": "The Bafin financial supervisory authority takes action against two branches of foreign credit institutions. On the one hand, the bank’s guards are examining a subsidiary of the Russian bank VTB for loopholes in the prevention of money laundering, as the Bonn authority announced on Friday. At Frankfu",
                                      "language": "en",
                                      "publisher": "UK Parents Lounge",
                                      "published_date": "2021-10-08T20:41:27",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.6748142242431641
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Money laundering – Bafin attacks two banks – economy –",
                      "score": 11,
                      "date": "2021-10-08T20:41:27Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (67%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:px_-qaWaf4wlXw_RA1yjNM9zfsaWcp5nrZ3f3RoO38A=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Reuters",
                              "url": "https://www.reuters.com/business/finance/german-finance-regulator-bans-bank-melli-iran-issuing-loans-2021-10-08/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-10-10_regulatory_event#1214",
                              "articles": [
                                  {
                                      "article_hash": "7465e38f19356487ca7d51e6d8ad496699b4dfae",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans",
                                      "url": "https://www.reuters.com/business/finance/german-finance-regulator-bans-bank-melli-iran-issuing-loans-2021-10-08/",
                                      "body": "A company logo of Bank Melli is displayed on the glass door at its branch in Hong Kong August 8, 2012. REUTERS/Bobby Yip/File Photo\n\nBERLIN, Oct 8 (Reuters) - German finance regulator BaFin said on Friday it had banned a Hamburg-based branch of Bank Melli Iran from issuing loans, citing infringement",
                                      "language": "en",
                                      "publisher": "Reuters",
                                      "published_date": "2021-10-08T11:11:00",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9007628560066223
                                  },
                                  {
                                      "article_hash": "751f17a031931bcb309f880b9fce1295321b04e5",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans",
                                      "url": "https://www.devdiscourse.com/article/business/1760859-german-finance-regulator-bans-bank-melli-iran-from-issuing-loans",
                                      "body": "German finance regulator BaFin said on Friday it had banned a Hamburg-based branch of Bank Melli Iran from issuing loans, citing infringements of transparency rules.\n\n\"BaFin had identified contraventions of the requirements for proper business organization within the meaning of section 25a (1) of th",
                                      "language": "en",
                                      "publisher": "Devdiscourse",
                                      "published_date": "2021-10-08T10:08:58",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9007628560066223
                                  },
                                  {
                                      "article_hash": "dcbaeef321288c46c9e28e8b8a5c0ffcc1d55bd9",
                                      "title": "German finance regulator bans Bank Melli Iran from issuing loans",
                                      "url": "https://www.devdiscourse.com/article/business/1760956-german-finance-regulator-bans-bank-melli-iran-from-issuing-loans",
                                      "body": "German finance regulator BaFin said on Friday it had banned a Hamburg-based branch of Bank Melli Iran from issuing loans, citing infringement of transparency rules.\n\n\"BaFin had identified contraventions of the requirements for proper business organization within the meaning of section 25a (1) of the",
                                      "language": "en",
                                      "publisher": "Devdiscourse",
                                      "published_date": "2021-10-08T11:04:37",
                                      "event_label": "Regulatory",
                                      "event_confidence": 0.9007628560066223
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "German finance regulator bans Bank Melli Iran from issuing loans",
                      "score": 11,
                      "date": "2021-10-08T11:11:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Regulatory (90%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:VNQNRpqBpN3v3vHKAzcqdWh19d6i5Zui-xINFDTmq9o=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "SundiataPost",
                              "url": "https://sundiatapost.com/afghan-women-express-fear-as-taliban-sack-female-bank-workers-in-two-provinces/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-08-15_terrorism_event#52",
                              "articles": [
                                  {
                                      "article_hash": "81f639ef8a2614f5ad5b2246ca430e2b7beac675",
                                      "title": "Afghan women express fear as Taliban sack female bank workers in two provinces",
                                      "url": "https://sundiatapost.com/afghan-women-express-fear-as-taliban-sack-female-bank-workers-in-two-provinces/",
                                      "body": "Women in Afghanistan have expressed fear as Taliban forces sack female bank workers in two provinces that had earlier fallen under their jackboot.\n\nThis is even as advertisements that featured women wearing wedding dresses appear to have been painted over in Kabul after Taliban fighters entered Afgh",
                                      "language": "en",
                                      "publisher": "SundiataPost",
                                      "published_date": "2021-08-16T10:16:57",
                                      "event_label": "Terrorism",
                                      "event_confidence": 0.89469975233078
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Afghan women express fear as Taliban sack female bank workers in two provinces",
                      "score": 11,
                      "date": "2021-08-16T10:16:57Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Terrorism (89%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:1d0LFsHIPGwu5kxvZdplWGmsHNBRY-YnwdrSbRI8eW4=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "The Independent",
                              "url": "https://www.independent.co.uk/asia/south-asia/afghanistan-taliban-women-rights-adverts-b1902922.html"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-08-15_terrorism_event#1",
                              "articles": [
                                  {
                                      "article_hash": "fbdb5cac7e7165965536089ec828be87bf1e3efd",
                                      "title": "Ads depicting women ‘painted over’ after Taliban enters Kabul",
                                      "url": "https://www.independent.co.uk/asia/south-asia/afghanistan-taliban-women-rights-adverts-b1902922.html",
                                      "body": "Adverts of women wearing wedding dresses appear to have been painted over in Kabul after Taliban fighters entered Afghanistan’s capital.\n\nA man can be seen using a roller and white paint to cover up the large images outside a building in a photograph posted on Twitter by an Afghan journalist on Sund",
                                      "language": "en",
                                      "publisher": "The Independent",
                                      "published_date": "2021-08-15T19:06:13",
                                      "event_label": "Terrorism",
                                      "event_confidence": 0.8830441832542419
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Ads depicting women ‘painted over’ after Taliban enters Kabul",
                      "score": 11,
                      "date": "2021-08-15T19:06:13Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Terrorism (88%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:7ug6HaN6DCMTA9_5wb3tJGzxkJa_zflGi0qfEnSzLPA=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Tehran Times",
                              "url": "https://www.tehrantimes.com/news/463687/Iran-s-central-bank-takes-legal-action-against-Bahrain"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-08-01_legal_risk_event#126",
                              "articles": [
                                  {
                                      "article_hash": "59a947ae2be3b6b15dc63761750557edb646d803",
                                      "title": "Iran's central bank takes legal action against Bahrain",
                                      "url": "https://www.tehrantimes.com/news/463687/Iran-s-central-bank-takes-legal-action-against-Bahrain",
                                      "body": "TEHRAN — The Central Bank of Iran (CBI) reported on Tuesday it has begun legal procedures to pursue action against baseless charges of the Bahraini High Criminal Court.\n\nThe central bank, based on the agreement on encouragement and mutual support of investment between the government of the Islamic R",
                                      "language": "en",
                                      "publisher": "Tehran Times",
                                      "published_date": "2021-08-03T17:35:37",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.952384352684021
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran's central bank takes legal action against Bahrain",
                      "score": 11,
                      "date": "2021-08-03T17:35:37Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:FhsqLOAIkwQfMg52WVELAQZblMmJuoM-xlQDJBoEcK8=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "The Jerusalem Post",
                              "url": "https://www.jpost.com/diaspora/in-first-us-court-rules-syria-iran-irgc-banks-liable-for-hamas-attack-673789"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-07-11_legal_risk_event#2305",
                              "articles": [
                                  {
                                      "article_hash": "5c28377ce31c48a4c356dee00ba01c2c5eab2d68",
                                      "title": "In first, US court rules Syria, Iran, IRGC, banks liable for Hamas attack",
                                      "url": "https://www.jpost.com/diaspora/in-first-us-court-rules-syria-iran-irgc-banks-liable-for-hamas-attack-673789",
                                      "body": "The Justice for United States Victims of State Sponsored Terrorism Act, which amended the Foreign Sovereign Immunities Act, established a fund to provide compensation to eligible claimants who hold judgments against state sponsors of terrorism. The District of Columbia court ruled on two suits: one ",
                                      "language": "en",
                                      "publisher": "The Jerusalem Post",
                                      "published_date": "2021-07-14T08:41:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9516680836677551
                                  },
                                  {
                                      "article_hash": "6f6057ee3e52c9c293831abe198a98aa708bc053",
                                      "title": "US court rules 3 Iranian banks liable for Hamas terror attack",
                                      "url": "https://t.co/v8vqz2BdhS",
                                      "body": "The Justice for United States Victims of State Sponsored Terrorism Act, which amended the Foreign Sovereign Immunities Act, established a fund to provide compensation to eligible claimants who hold judgments against state sponsors of terrorism. The District of Columbia court ruled on two suits: one ",
                                      "language": "en",
                                      "publisher": "The Jerusalem Post",
                                      "published_date": "2021-07-14T12:45:29",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9156642556190491
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "In first, US court rules Syria, Iran, IRGC, banks liable for Hamas attack",
                      "score": 11,
                      "date": "2021-07-14T08:41:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:7dhDKM-XrPsG_Y0k8Bcam0atd-T6rnPbRO1RXpOLCfU=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "The Jerusalem Post",
                              "url": "https://www.jpost.com/middle-east/bahrain-to-prosecute-iranian-financial-institutions-on-money-laundering-668481"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-16_financial_crime_event#280",
                              "articles": [
                                  {
                                      "article_hash": "45d94c7e73e9ee6c25009023efd056e6ec7d66eb",
                                      "title": "Bahrain to prosecute Iranian financial institutions on money laundering",
                                      "url": "https://www.jpost.com/middle-east/bahrain-to-prosecute-iranian-financial-institutions-on-money-laundering-668481",
                                      "body": "For more stories from The Media Line go to themedialine.org\n\ncnxps.cmd.push(function () { cnxps({ playerId: '36af7c51-0caf-4741-9824-2c941fc6c17b' }).render('4c4d856e0e6f4e3d808bbc1715e132f6'); });\n\nif(window.location.pathname.indexOf(\"656089\") != -1){console.log(\"hedva connatix\");document.getElemen",
                                      "language": "en",
                                      "publisher": "The Jerusalem Post",
                                      "published_date": "2021-05-18T22:42:00",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.9236035346984863
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain to prosecute Iranian financial institutions on money laundering",
                      "score": 11,
                      "date": "2021-05-18T22:42:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (92%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:3wDZFiJgpgdLX1x61quUBq2JQs8rm32atu5aT1_KsE0=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Mehr News Agency - English Version",
                              "url": "https://en.mehrnews.com/news/173381/EU-companies-could-face-legal-action-over-Iran-contracts-AP"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-05-16_legal_risk_event#2219",
                              "articles": [
                                  {
                                      "article_hash": "38d0270aa16bd41760358fe0a0575a896c56164b",
                                      "title": "EU companies could face legal action over Iran contracts: AP",
                                      "url": "https://en.mehrnews.com/news/173381/EU-companies-could-face-legal-action-over-Iran-contracts-AP",
                                      "body": "European companies doing business with Iran could face legal troubles if they have terminated their contracts with Iranian banks or firms solely because of fears about possible U.S. sanctions, the Associated Press cited a legal opinion handed down Wednesday by a top EU court advisor.\n\nThe case cente",
                                      "language": "en",
                                      "publisher": "Mehr News Agency - English Version",
                                      "published_date": "2021-05-13T00:54:00",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.95726478099823
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "EU companies could face legal action over Iran contracts: AP",
                      "score": 11,
                      "date": "2021-05-13T00:54:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (95%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:5C7y8WSueLUgTjOdTxd55xpxVv8rllGTmvJ5lAOPTK0=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "english.ahram.org.eg",
                              "url": "https://english.ahram.org.eg/NewsContent/3/0/49061/Business/0/-sentenced-to-death-for-Irans-biggest-bank-fraud-.aspx"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-03-07_financial_crime_event#809",
                              "articles": [
                                  {
                                      "article_hash": "affefcc77a3fd2feb7c8f3d53021c0f56b6b2541",
                                      "title": "4 sentenced to death for Iran's biggest bank fraud",
                                      "url": "https://english.ahram.org.eg/NewsContent/3/0/49061/Business/0/-sentenced-to-death-for-Irans-biggest-bank-fraud-.aspx",
                                      "body": "A Tehran court has sentenced to death four people convicted in Iran's biggest-ever banking scandal, according to the national chief prosecutor on Monday, quoted by the official news agency IRNA.\n\nThe sentences came at the end of a trial of 39 suspects that started in February. The magnitude of the s",
                                      "language": "en",
                                      "publisher": "english.ahram.org.eg",
                                      "published_date": "2021-03-08T00:18:00",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.8345894813537598
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "4 sentenced to death for Iran's biggest bank fraud",
                      "score": 11,
                      "date": "2021-03-08T00:18:00Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (83%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:VnID7BT2zlShmN_cwW-gaHJUzvDqzKSqDk8-S2mg5Us=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Reuters",
                              "url": "https://www.reuters.com/article/us-usa-court-iran/u-s-top-court-turns-away-dispute-involving-irans-bank-melli-idUSKBN1GH2ST?edition-redirect=uk"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2021-01-10_legal_risk_event#707",
                              "articles": [
                                  {
                                      "article_hash": "3a5976893c046a31c75082dda1365b16872a5647",
                                      "title": "U.S. top court turns away dispute involving Iran's Bank Melli",
                                      "url": "https://www.reuters.com/article/us-usa-court-iran/u-s-top-court-turns-away-dispute-involving-irans-bank-melli-idUSKBN1GH2ST?edition-redirect=uk",
                                      "body": "WASHINGTON (Reuters) - The U.S. Supreme Court on Monday declined to take up Iranian government-owned Bank Melli’s appeal of a lower court ruling that allowed victims of militant attacks allegedly backed by Iran to seek millions of dollars in compensation from the bank.\n\nSlideshow ( 3 images )\n\nThe j",
                                      "language": "en",
                                      "publisher": "Reuters",
                                      "published_date": "2021-01-08T02:29:56",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9093326330184937
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "U.S. top court turns away dispute involving Iran's Bank Melli",
                      "score": 11,
                      "date": "2021-01-08T02:29:56Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (90%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:3ckGUxGbkyZZycEOUyHTSsjj7uIgZyxzreX2S4GqfkQ=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Al Jazeera English",
                              "url": "https://www.aljazeera.com/news/2020/11/19/iran-slams-un-human-rights-resolution-on-anniversary-of-protests"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-11-22_human_rights_violation_event#61",
                              "articles": [
                                  {
                                      "article_hash": "c871f8e3740b60d9f81000e279841e99b5172279",
                                      "title": "Iran slams UN human rights resolution on anniversary of protests",
                                      "url": "https://www.aljazeera.com/news/2020/11/19/iran-slams-un-human-rights-resolution-on-anniversary-of-protests",
                                      "body": "Tehran rejects a UN resolution on human rights as invalid due to the human rights records of its sponsors.\n\nTehran, Iran – Roughly one year after protests over economic hardship broke out across Iran, officials have condemned a United Nations resolution that among other things calls for upholding hu",
                                      "language": "en",
                                      "publisher": "Al Jazeera English",
                                      "published_date": "2020-11-19T14:35:15",
                                      "event_label": "Human Rights Violation",
                                      "event_confidence": 0.7744055986404419
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran slams UN human rights resolution on anniversary of protests",
                      "score": 11,
                      "date": "2020-11-19T14:35:15Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Human Rights Violation (77%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:AJaDRBeQ9HrJHV0LMF--E2VHC8TP67zxPNHiUi8o86k=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Al Jazeera English",
                              "url": "https://www.aljazeera.com/economy/2020/10/15/spain-extradites-former-banker-sentenced-in-iran-for-corruption"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-10-18_financial_crime_event#162",
                              "articles": [
                                  {
                                      "article_hash": "bcfcf75193654d8fa5276464cd5abc25e0fc02d6",
                                      "title": "Spain extradites former banker sentenced in Iran for corruption",
                                      "url": "https://www.aljazeera.com/economy/2020/10/15/spain-extradites-former-banker-sentenced-in-iran-for-corruption",
                                      "body": "Alireza Heydar Abadipour, former CEO of Sarmayeh Bank, had been arrested in Spain last year following an Interpol request by Iran.\n\nSpain has extradited a fugitive former Iranian executive implicated in a large financial corruption case, in what Iran’s judiciary says is the first such extradition fr",
                                      "language": "en",
                                      "publisher": "Al Jazeera English",
                                      "published_date": "2020-10-15T07:07:54",
                                      "event_label": "Financial Crime",
                                      "event_confidence": 0.9093509316444397
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Spain extradites former banker sentenced in Iran for corruption",
                      "score": 11,
                      "date": "2020-10-15T07:07:54Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Financial Crime (90%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Hnfw6sE8yN1wyyuvDJpWTTWFyjlzpe7uHrDmms-fsEE=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Caspian News",
                              "url": "https://caspiannews.com/news-detail/iran-jails-two-men-convicted-of-spying-for-uk-germany-and-israel-2020-8-11-29/"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-08-09_other_crime_event#118",
                              "articles": [
                                  {
                                      "article_hash": "a53b35b9a5835c48099f0debdf4f23f01273502b",
                                      "title": "Iran Jails Two Men Convicted of Spying for U.K., Germany, and Israel",
                                      "url": "https://caspiannews.com/news-detail/iran-jails-two-men-convicted-of-spying-for-uk-germany-and-israel-2020-8-11-29/",
                                      "body": "Iran has sentenced two men to 10 years each in prison based on alleged accusations of spying for Britain, Germany, and Israel in separate cases.\n\n“One of the men convicted of espionage, Massud Mossaheb, had been \"spying\" for the German and Israeli intelligence agencies under the guise of the general",
                                      "language": "en",
                                      "publisher": "Caspian News",
                                      "published_date": "2020-08-12T16:14:16",
                                      "event_label": "Other Crime",
                                      "event_confidence": 0.6779434084892273
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran Jails Two Men Convicted of Spying for U.K., Germany, and Israel",
                      "score": 11,
                      "date": "2020-08-12T16:14:16Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Other Crime (67%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:h8TEPmnfCFbCiuBrQ0Bn8jVNWLutLN3GazjPK6eiqjI=",
                      "code": "ADM005",
                      "name": "Sigma News Event",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "Gulf Digital News",
                              "url": "http://www.gdnonline.com/Details/838745/Appeals-court-ups-the-ante"
                          }
                      ],
                      "indicator_facet": "article",
                      "linked_events": [
                          {
                              "id": "2020-07-26_legal_risk_event#888",
                              "articles": [
                                  {
                                      "article_hash": "4799f49d4d1303b38606b560d2d78afa7a672df7",
                                      "title": "Bahrain News: Appeals court ups the ante",
                                      "url": "http://www.gdnonline.com/Details/838745/Appeals-court-ups-the-ante",
                                      "body": "AN appeals court in Bahrain has increased the fines imposed on three officials and four banks in connection with a money laundering case. The Iranian men and the four Iranian state-owned banks – Future Bank, Bank Saderat, Bank Melli and Bank Saderat, Doha – are all facing charges in five money laund",
                                      "language": "en",
                                      "publisher": "Gulf Digital News",
                                      "published_date": "2020-07-27T21:07:32",
                                      "event_label": "Legal Risk",
                                      "event_confidence": 0.9209654927253723
                                  }
                              ]
                          }
                      ],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bahrain News: Appeals court ups the ante",
                      "score": 11,
                      "date": "2020-07-27T21:07:32Z",
                      "extras": {
                          "Event Tags": [
                              {
                                  "text": "Legal Risk (92%)"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [],
              "company_registry": null,
              "vessel": null,
              "person": null,
              "potential_ubo": null
          },
          {
              "match_name": "Bank Melli",
              "entity_name": "Bank Melli Iran",
              "aliases": [
                  "Bank-E Melli",
                  "Bank Meli Iran",
                  "Iran National Bank",
                  "Bmi",
                  "Bank Melli",
                  "National Bank Of Iran",
                  "Bank Melli Iran, Inc",
                  "Meliirth",
                  "بانک ملی ایران",
                  "بانک ملی",
                  "Melli Bank"
              ],
              "associations": {
                  "direct_owners": [],
                  "companies": [
                      {
                          "name": "Bank Melli Iran (Russia)",
                          "type": "company",
                          "relationship": "Is Linked To",
                          "full_relationships": [
                              "Bank Melli Iran (Russia) is linked to Bank Melli Iran"
                          ],
                          "country": null,
                          "sanctioned": false
                      }
                  ],
                  "people": [
                      {
                          "name": "Mahmoud Reza Khavari",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Mahmoud Reza Khavari is a Former Chairperson of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": "1952-05-26T00:00:00Z",
                          "political_positions": [
                              {
                                  "description": "Former Director of Melli Bank Plc (State-Owned Enterprise)",
                                  "country": "United Kingdom",
                                  "from": "2009-05-13T00:00:00Z",
                                  "to": "2011-09-27T00:00:00Z"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "to": "2011-09-27T00:00:00Z"
                              },
                              {
                                  "description": "Former Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "to": "2011-09-27T00:00:00Z"
                              }
                          ]
                      },
                      {
                          "name": "Mahmood Shayan",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Mahmood Shayan is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2016-08-23T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Managing Director in Charge of Credit and Consumption Control of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Ahmad Taheri Behbehani",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Ahmad Taheri Behbehani is a former Senior Manager of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": "1933-11-24T00:00:00Z",
                          "political_positions": [
                              {
                                  "description": "Former Chief Executive Officer of Bank of Sharjah (State-Owned Enterprise)",
                                  "country": "United Arab Emirates",
                                  "from": "1996-01-01T00:00:00Z",
                                  "to": "1997-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Director in Charge of the Persian Gulf Branches of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1967-01-01T00:00:00Z",
                                  "to": "1978-01-01T00:00:00Z"
                              }
                          ]
                      },
                      {
                          "name": "Parviz Moghadasi",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Parviz Moghadasi is a Former Chairperson of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Saderat Iran (State-Owned Enterprise) (1st Term)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Chairperson of the Board of Directors of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Sarmad Insurance Company (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Chairperson of the Board of Directors of Bank Saderat Iran (State-Owned Enterprise) (2nd Term)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Ghadir Investment Company (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Tosee Melli Group Investment Company (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of the National Informatics Corporation (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Farzad Ahmadi",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Farzad Ahmadi is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Barat Karimi",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Barat Karimi is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2015-02-25T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Managing Director in Charge of Branch Affairs of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Habibollah Rashid Ardeh",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Habibollah Rashid Ardeh is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy Managing Director in Charge of Human Resources of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Ali Salehi Amiri",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Ali Salehi Amiri is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Managing Director of Bank Melli Iran Investment Company (BMIIC) (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Mahmoud Bahmani",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Mahmoud Bahmani is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2000-12-11T00:00:00Z",
                                  "to": "2007-10-14T00:00:00Z"
                              },
                              {
                                  "description": "Former Governor of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2008-09-01T00:00:00Z",
                                  "to": "2013-09-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Islamic Consultative Assembly (Majlis) for Savojbolagh, Nazarabad and Taleqan, Alborz",
                                  "country": "Iran",
                                  "from": "2016-01-01T00:00:00Z",
                                  "to": "2020-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Principlist Grand Coalition",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Secretary General of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Majid Ghasemi",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Majid Ghasemi is a Former Managing Director of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Governor of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1986-01-01T00:00:00Z",
                                  "to": "1989-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Senior Adviser to the Minister of Industry and Mine",
                                  "country": "Iran",
                                  "from": "1997-01-01T00:00:00Z",
                                  "to": "2003-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Deputy Minister of Energy in Charge of Industrial Affairs and Support",
                                  "country": "Iran",
                                  "from": "1989-01-01T00:00:00Z",
                                  "to": "1997-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1985-01-01T00:00:00Z",
                                  "to": "1986-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chairperson of the Monetary and Credit Council",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Chairperson of the Supreme Council of Banks",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Member of the Economy Council",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Director of the Currency Transactions Desk of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1981-01-01T00:00:00Z",
                                  "to": "1982-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Director of the Exchange Control Desk of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1982-01-01T00:00:00Z",
                                  "to": "1985-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Acting Deputy Minister of Energy in Charge of Planning and Economic Affairs",
                                  "country": "Iran",
                                  "from": "1992-01-01T00:00:00Z",
                                  "to": "1993-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Esfahan Steel Company (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1997-01-01T00:00:00Z",
                                  "to": "2001-01-01T00:00:00Z"
                              }
                          ]
                      },
                      {
                          "name": "Khosro Khaje-Hasani",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Khosro Khaje-Hasani is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Abbas Torshizi",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Abbas Torshizi is a Former Deputy Managing Director of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Deputy Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Director of Bank Melli Iran (UAE), (Sate-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Naser Shahbaz",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Naser Shahbaz is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2016-10-23T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Managing Director in Charge of Financial Affairs of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Abdolnaser Hemmati",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Abdolnaser Hemmati is a Former Chairperson of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Director of Melli Bank Plc (State-Owned Enterprise)",
                                  "country": "United Kingdom",
                                  "from": "2013-10-14T00:00:00Z",
                                  "to": "2016-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Member of the Board of Governors | International Monetary Fund (IMF)",
                                  "country": "United States of America"
                              },
                              {
                                  "description": "Former President of the Central Insurance of Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1994-01-01T00:00:00Z",
                                  "to": "2014-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2013-01-01T00:00:00Z",
                                  "to": "2016-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2013-01-01T00:00:00Z",
                                  "to": "2016-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Ambassador to China",
                                  "country": "Iran",
                                  "from": "2018-06-24T00:00:00Z",
                                  "to": "2018-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2018-07-25T00:00:00Z"
                              },
                              {
                                  "description": "Former Governor (رئیس کل) | Central Bank of the Islamic Republic of Iran (بانک مرکزی جمهوری اسلامی ايران‎)",
                                  "country": "Iran",
                                  "from": "2018-07-25T00:00:00Z",
                                  "to": "2021-05-30T00:00:00Z"
                              }
                          ]
                      },
                      {
                          "name": "Gholamreza Panahi",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Gholamreza Panahi is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Director of Melli Bank Plc (State-Owned Enterprise)",
                                  "country": "United Kingdom",
                                  "from": "2016-07-08T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Member of the Board of Governors, International Monetary Fund (IMF) for Iran",
                                  "country": "United States of America"
                              },
                              {
                                  "description": "Deputy Managing Director of Melli Bank Plc (State-Owned Enterprise) in Charge of Foreign Exchange and International Affairs",
                                  "country": "Iran",
                                  "from": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2015-02-25T00:00:00Z",
                                  "to": "2017-06-07T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Foreign Exchange Affairs",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Nosratallah Shahbazi",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Nosratallah Shahbazi is a former Senior Manager of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Director of the Credit Department of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Director in Charge of Branches Affairs of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Mohsen Aminzare",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Mohsen Aminzare is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy Managing Director in Charge of Currency and Foreign Affairs of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Kavous Irajpour",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Kavous Irajpour is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy Managing Director in Charge of Legal Affairs and  Claims Collection of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Abbas Shafiei",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Abbas Shafiei is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy Managing Director in Charge of Support of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Ramin Pashaee Fam",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Ramin Pashaee Fam is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Chairperson of the Board of Directors of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2010-01-01T00:00:00Z",
                                  "to": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Managing Director of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2010-01-01T00:00:00Z",
                                  "to": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Deputy Chairperson of the Executive Board of the National Development Fund",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Economic Affairs",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former General Director of the Commercial Affairs Department, Management and Planning Organisation",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of European-Iranian Trade Bank (State-Owned Enterprise)",
                                  "country": "Germany",
                                  "from": "2016-08-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of European-Iranian Trade Bank (State-Owned Enterprise)",
                                  "country": "Germany",
                                  "to": "2016-07-31T00:00:00Z"
                              }
                          ]
                      },
                      {
                          "name": "Masoud Khatouni",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Masoud Khatouni is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2017-06-07T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Managing Director in Charge of Information Technology and Communications Network of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Jamal Damghanian",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Jamal Damghanian is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Managing Director in Charge of Legal Claims of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Managing Director of Behshahr Industrial Development Corp. (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Mohammad Khaki",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Mohammad Ebrahim Mansour Khaki is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Chief Financial Officer of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2006-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Deputy Director of the Banking, Insurance and Government Companies Department of the Ministry of Economic Affairs and Finance",
                                  "country": "Iran",
                                  "from": "2008-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chairperson of the Board of Directors of Bank Melli Printing and Publishing Co. (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2010-01-01T00:00:00Z",
                                  "to": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2010-01-01T00:00:00Z",
                                  "to": "2013-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Sepah (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Gholam Hassan Asgharzadeh Zaferani",
                          "type": "person",
                          "relationship": "Has Manager",
                          "full_relationships": [
                              "Gholam Hassan Asgharzadeh Zaferani is a former Senior Manager of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Director of Future Bank (State-Owned Enterprise)",
                                  "country": "Bahrain"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Future Bank (State-Owned Enterprise)",
                                  "country": "Bahrain"
                              },
                              {
                                  "description": "Former Director of Melli Bank Plc (State-Owned Enterprise)",
                                  "country": "United Kingdom",
                                  "from": "2003-04-16T00:00:00Z",
                                  "to": "2008-04-20T00:00:00Z"
                              },
                              {
                                  "description": "Director of Melli Bank Plc (State-Owned Enterprise)",
                                  "country": "United Kingdom",
                                  "from": "2014-11-10T00:00:00Z"
                              },
                              {
                                  "description": "Chairperson (رئیس) | State-Owned Enterprise (شرکت دولتی)",
                                  "country": "Iran",
                                  "from": "2014-11-10T00:00:00Z"
                              },
                              {
                                  "description": "Former Director General of Dubai, Eastern European, Far East and Central Asian Countries Regional Office, Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "1996-01-01T00:00:00Z",
                                  "to": "2001-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chief Executive Officer of Saman Bank (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2006-01-01T00:00:00Z",
                                  "to": "2010-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Chief Executive Officer of Arian E-Bank",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Valliollah Fatemi Ardakani",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Valliollah Fatemi Ardakani is a Former Member of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Abolfazl Najarzadeh",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Abolfazl Najarzadeh is a Deputy Managing Director of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Deputy Managing Director (معاون مدیر عامل) | State-Owned Enterprise (شرکت دولتی)",
                                  "country": "Iran",
                                  "from": "2020-06-20T00:00:00Z"
                              },
                              {
                                  "description": "Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Administrative and Financial Affairs",
                                  "country": "Iran",
                                  "from": "2018-11-17T00:00:00Z"
                              },
                              {
                                  "description": "Former Secretary of the Board of the Directors of Bank of Industry and Mine",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Mohammad Reza Farzin",
                          "type": "person",
                          "relationship": "Has Director",
                          "full_relationships": [
                              "Mohammad Reza Farzin is a Managing Director of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 1,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Former Deputy Minister of Economic Affairs and Finance in Charge of Economic Affairs",
                                  "country": "Iran",
                                  "from": "2009-01-01T00:00:00Z",
                                  "to": "2012-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Former Managing Director of the National Development Fund",
                                  "country": "Iran",
                                  "from": "2012-06-01T00:00:00Z"
                              },
                              {
                                  "description": "Adviser to the Deputy Minister of Economic Affairs and Finance in Charge of Planning and Economic Studies",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Member of the Board of Directors of Bank Keshavarzi Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Managing Director (مدیر عامل) | State-Owned Enterprise (شرکت دولتی)",
                                  "country": "Iran"
                              }
                          ]
                      },
                      {
                          "name": "Mohammad Reza Hosseinzadeh",
                          "type": "person",
                          "relationship": "Has Member of the Board",
                          "full_relationships": [
                              "Mohammad Reza Hosseinzadeh is a Former Chairperson of the Board of Directors of Bank Melli Iran"
                          ],
                          "country": "IR",
                          "sanctioned": false,
                          "pep": 2,
                          "dob": null,
                          "political_positions": [
                              {
                                  "description": "Director of Melli Bank Plc (State-Owned Enterprise)",
                                  "country": "United Kingdom",
                                  "from": "2016-07-08T00:00:00Z"
                              },
                              {
                                  "description": "Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2007-01-01T00:00:00Z"
                              },
                              {
                                  "description": "Chairperson of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2016-06-26T00:00:00Z"
                              },
                              {
                                  "description": "Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran",
                                  "from": "2016-06-26T00:00:00Z"
                              },
                              {
                                  "description": "Former Deputy Managing Director in Charge of Credit and Trading Affairs of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Managing Director in Charge of IT Affairs of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Managing Director in Charge of Legal Affairs, Recovery and Compliance of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Managing Director in Charge of Maintenance and Support of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              },
                              {
                                  "description": "Former Deputy Managing Director in Charge of Provincial Affairs and National Branches of Bank Melli Iran (State-Owned Enterprise)",
                                  "country": "Iran"
                              }
                          ]
                      }
                  ]
              },
              "facet": "company",
              "strength": 1,
              "description": null,
              "source": {
                  "name": "Acuris Business",
                  "key": "acuris_business",
                  "match_id": "C51755",
                  "match_name": "Bank Melli",
                  "last_checked": "2022-11-09T10:57:46Z",
                  "strength": 1,
                  "isDecisionedAgainst": false
              },
              "indicators": [
                  {
                      "urn": "urn:sigma:indicator:DXkjxQ3ud9lgthCZ1ErpuybstDpFQvhVhlQMb-Ohr78=",
                      "code": "KYC001",
                      "name": "Has KYC Information Indicator",
                      "category": "Know Your Customer",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Bank Melli Iran",
                      "score": 0,
                      "extras": {
                          "Associated Companies": [
                              {
                                  "text": "Bank Melli Iran (Russia)"
                              }
                          ],
                          "Associated People": [
                              {
                                  "text": "Mahmoud Bahmani"
                              },
                              {
                                  "text": "Mahmoud Reza Khavari"
                              },
                              {
                                  "text": "Jamal Damghanian"
                              },
                              {
                                  "text": "Mohammad Reza Hosseinzadeh"
                              },
                              {
                                  "text": "Mohammad Khaki"
                              },
                              {
                                  "text": "Farzad Ahmadi"
                              },
                              {
                                  "text": "Abdolnaser Hemmati"
                              },
                              {
                                  "text": "Barat Karimi"
                              },
                              {
                                  "text": "Gholamreza Panahi"
                              },
                              {
                                  "text": "Majid Ghasemi"
                              },
                              {
                                  "text": "Abbas Torshizi"
                              },
                              {
                                  "text": "Gholam Hassan Asgharzadeh Zaferani"
                              },
                              {
                                  "text": "Khosro Khaje-Hasani"
                              },
                              {
                                  "text": "Valliollah Fatemi Ardakani"
                              },
                              {
                                  "text": "Mahmood Shayan"
                              },
                              {
                                  "text": "Naser Shahbaz"
                              },
                              {
                                  "text": "Ahmad Taheri Behbehani"
                              },
                              {
                                  "text": "Nosratallah Shahbazi"
                              },
                              {
                                  "text": "Ali Salehi Amiri"
                              },
                              {
                                  "text": "Ramin Pashaee Fam"
                              },
                              {
                                  "text": "Masoud Khatouni"
                              },
                              {
                                  "text": "Habibollah Rashid Ardeh"
                              },
                              {
                                  "text": "Abbas Shafiei"
                              },
                              {
                                  "text": "Mohsen Aminzare"
                              },
                              {
                                  "text": "Kavous Irajpour"
                              },
                              {
                                  "text": "Parviz Moghadasi"
                              },
                              {
                                  "text": "Abolfazl Najarzadeh"
                              },
                              {
                                  "text": "Mohammad Reza Farzin"
                              }
                          ],
                          "Countries": [
                              {
                                  "text": "Iran"
                              },
                              {
                                  "text": "Azerbaijan"
                              },
                              {
                                  "text": "France"
                              },
                              {
                                  "text": "United States of America"
                              },
                              {
                                  "text": "United Kingdom"
                              },
                              {
                                  "text": "Iraq"
                              },
                              {
                                  "text": "United Arab Emirates"
                              },
                              {
                                  "text": "Oman"
                              },
                              {
                                  "text": "Germany"
                              },
                              {
                                  "text": "Hong Kong"
                              }
                          ],
                          "Founded": [
                              {
                                  "text": "1927-08-05T00:00:00Z"
                              }
                          ],
                          "Identifiers": [
                              {
                                  "text": "BIC Number: MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Number: 60"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:qeNkNqRc_SPd3iIAFG4Eqz1rcausA5dIBu1XSnCr5nM=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Canadian Government Sanctions",
                      "score": 70,
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Ja24_Bi_pB6uVVUVkxNZzU-Hq-Q8tzi5t8rPO8yPRMw=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0017935000/0017931917.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0018060000/0018056374.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0018600000/0018596381.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0019980000/0019977284.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0020765000/0020761544.pdf"
                          },
                          {
                              "name": "eur-lex.europa.eu",
                              "url": "https://secure.c6-intelligence.com/c6images/0020835000/0020832960.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "EU",
                      "score": 70,
                      "date": "2010-07-27T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:4CxA-KvRYbPel5zO06xBZkqFlyqQCOX1HjtNYDtfRdw=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "HMT",
                      "score": 70,
                      "date": "2008-06-24T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:zkxUNFzf-OIe1F1t6BOqs0pTlq5b-f8mOxNLyZXu5iM=",
                      "code": "SAN001",
                      "name": "Appears on sanction list",
                      "category": "Sanctions",
                      "sources": [
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0010230000/0010228004.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0010235000/0010234845.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0010660000/0010657456.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0011675000/0011673874.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0011675000/0011673605.pdf"
                          },
                          {
                              "name": "ustreas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0013620000/0013616307.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0013810000/0013805485.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0013810000/0013805486.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0013810000/0013805491.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0013990000/0013985426.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0014640000/0014635315.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0015175000/0015174922.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0017020000/0017018743.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0017740000/0017739617.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0018070000/0018066502.pdf"
                          },
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0018650000/0018645049.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019420000/0019417681.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019540000/0019538747.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019865000/0019860739.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0019945000/0019942408.pdf"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/updated_names.aspx"
                          },
                          {
                              "name": "home.treasury.gov",
                              "url": "https://home.treasury.gov/news/press-releases/sm541"
                          },
                          {
                              "name": "treasury.gov",
                              "url": "https://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Pages/20181105_names.aspx"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "OFAC",
                      "score": 100,
                      "date": "2007-10-25T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:mMvVSv_R1nHAzyRMMNPC5mBft77wadBCataPGdEiMMA=",
                      "code": "SAN003",
                      "name": "Previously appeared on sanction list",
                      "category": "Sanctions",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "UN",
                      "score": 70,
                      "date": "2008-03-03T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:5Ad8NeThnVyMKtNxv8QAeEQqV46KZ3Gpz1edLWgA9P8=",
                      "code": "SOE001",
                      "name": "State Owned Enterprise (SOE)",
                      "category": "State Owned Entity",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "State Owned Enterprise",
                      "score": 20,
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:_EZRxnvr0iAxj3H7jegYwrKAkSu60RKMwBMHWp2E1Ro=",
                      "code": "ADM001",
                      "name": "Article detected - Reputational Risk Database",
                      "category": "Adverse Media",
                      "sources": [
                          {
                              "name": "payvand.com",
                              "url": "http://www.payvand.com/news/07/nov/1033.html"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Iran's Bank Mellat denies U.S. accusations",
                      "score": 50,
                      "date": "2007-11-06T00:00:00Z",
                      "extras": {
                          "Description": [
                              {
                                  "text": "Iran's Bank Mellat denies U.S. accusations TEHRAN, Nov. 04 (ISNA)-Iran's Bank Mellat issued a statement about the U.S. groundless accusations and illegal sanctions on this bank and two other banks, Melli..."
                              }
                          ],
                          "Event Tags": [
                              {
                                  "text": "rig,illegal"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:OO7y-9VdrjlMZJbitmK1wLYcmH3b1p7RGa6QKDGh9Q0=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "newyork.fbi.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0013990000/0013985985.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (newyork.fbi.gov)",
                      "score": 70,
                      "date": "2008-12-19T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:aRtRpC70qzpPnfcl7mM566u7_jH9rv4qPHQ5og_W8Rs=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "newyork.fbi.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0014010000/0014007851.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (newyork.fbi.gov)",
                      "score": 70,
                      "date": "2008-12-23T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:CFqjW7AZTfkWp4LdcITeEOP5jzxXFpnkUoKeKzAebtM=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "usdoj.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0014995000/0014993426.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (usdoj.gov)",
                      "score": 70,
                      "date": "2009-04-20T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:MQK50EJFgBTz73q_J0J-Rbb1Q1QMx3TfqppTP2PoiSM=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "Acuris",
                              "url": "https://secure.c6-intelligence.com/c6images/0015160000/0015156979.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue",
                      "score": 70,
                      "date": "2009-05-10T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:w0z9a_wmnWN5dy4ZyJxRrWzcfiSwCFSJ4ralbqmNrTs=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "usdoj.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0016665000/0016660531.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (usdoj.gov)",
                      "score": 70,
                      "date": "2009-12-31T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Xi82O35I5ObTC8ozPLT1JqsRln--6fe1Nh93Hrqw4UQ=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "treas.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0016985000/0016983766.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (treas.gov)",
                      "score": 70,
                      "date": "2010-02-24T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:mT5-PLTkzBB2A42gt5v3OoBRwUds_uOt6gmKcK8fMEg=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "ogs.ny.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0020625000/0020623990.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (ogs.ny.gov)",
                      "score": 70,
                      "date": "2015-01-09T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:v1i0c-d_F98DKfIaz4w_yq4HdWIUi4J3mowW5bfBwjQ=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "international.gc.ca",
                              "url": "https://secure.c6-intelligence.com/c6images/0020815000/0020810540.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (international.gc.ca)",
                      "score": 70,
                      "date": "2016-02-09T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:hHBC5UXl18L717ewvvc9WMcPQt5bWE26LHX1Q2n4Nhs=",
                      "code": "ENF003",
                      "name": "Law enforcement issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "ogs.ny.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0023640000/0023638864.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Law Enforcement issue (ogs.ny.gov)",
                      "score": 70,
                      "date": "2017-11-21T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:ILM7K01twxfV7Bwfjgr_eBiGvqBSQtheWvJ18gqvl8Y=",
                      "code": "ENF002",
                      "name": "Regulatory issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "rba.gov.au",
                              "url": "https://secure.c6-intelligence.com/c6images/0013655000/0013650867.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Regulatory issue (rba.gov.au)",
                      "score": 70,
                      "date": "2008-10-16T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:3FgRRRsUSnRawbDvndkAUGzTLFzdjlAHvJLwu7o8DEE=",
                      "code": "ENF002",
                      "name": "Regulatory issue detected",
                      "category": "Enforcement Action",
                      "sources": [
                          {
                              "name": "fincen.gov",
                              "url": "https://secure.c6-intelligence.com/c6images/0018600000/0018595808.pdf"
                          }
                      ],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Regulatory issue (fincen.gov)",
                      "score": 70,
                      "date": "2010-11-23T00:00:00Z",
                      "extras": {
                          "Addresses": [
                              {
                                  "text": "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran Iran 1135937641"
                              },
                              {
                                  "text": "23 Nobel Avenue Baku Azerbaijan"
                              },
                              {
                                  "text": "43 Avenue Montaigne Paris France 75008"
                              },
                              {
                                  "text": "767 5th Ave, 44th Fl. New York New York United States of America 10153"
                              },
                              {
                                  "text": "98a Kensington High Street London United Kingdom W8 4SG"
                              },
                              {
                                  "text": "Al Ashar Estiqlal Street - Hal Al Zohor Basra Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad Iraq"
                              },
                              {
                                  "text": "Bank Melli Iran Building Ferdowsi Avenue Tehran Iran 11365-144"
                              },
                              {
                                  "text": "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran Iran"
                              },
                              {
                                  "text": "PO Box 11365-171 Ferdowsi Av. Tehran Iran"
                              },
                              {
                                  "text": "PO Box 1420 New York New York United States of America 10153"
                              },
                              {
                                  "text": "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Al Wasl Rd Jumeirah Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 1894, Baniyas St, Deira Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 248, Hamad Bin Abdulla St Fujairah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 2643, Ruwi, 112 Muscat Oman"
                              },
                              {
                                  "text": "PO Box 2656, Liva Street Abu Dhabi United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 459, Al Borj St Sharjah United Arab Emirates"
                              },
                              {
                                  "text": "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah United Arab Emirates"
                              },
                              {
                                  "text": "Postfach 112 129 Holzbruecke 2 Hamburg Germany 20421"
                              },
                              {
                                  "text": "Room 704-6, Wheelock Hse 20 Pedder St Hong Kong"
                              }
                          ],
                          "Notes": [
                              {
                                  "text": "Previously listed as a sanctioned entity by HMT - not on current list - see latest HMT document for details"
                              },
                              {
                                  "text": "Currently listed as a sanctioned entity by OFAC - Additional Sanctions Information - Subject to Secondary Sanctions"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by UN - not on current list - see latest UN document for details"
                              },
                              {
                                  "text": "Previously listed as a sanctioned entity by EU - not on current list - see latest EU document for details"
                              },
                              {
                                  "text": "Formerly Listed under the Canadian Special Economic Measures (Iran) Regulations - no longer listed under the revised list issued on the 5 February 2016"
                              },
                              {
                                  "text": "Economic Number: 411111378635; National ID Number: 10861677542"
                              },
                              {
                                  "text": "State Owned Enterprise (SOE)"
                              },
                              {
                                  "text": "Rep. Risk: Financial Crime and Fraud - Failure to Comply with Relevant Financial Regulations"
                              },
                              {
                                  "text": "Regulatory Enforcement Lists"
                              },
                              {
                                  "text": "BIC Number MELIIRTH"
                              },
                              {
                                  "text": "Business Registration Date 08.05.1927"
                              },
                              {
                                  "text": "Business Registration Number 60"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IFSR"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) IRAN"
                              },
                              {
                                  "text": "OFAC - Specially Designated Nationals List (SDN List) SDGT"
                              },
                              {
                                  "text": "OFAC Unique ID 25578"
                              },
                              {
                                  "text": "SIC Number 6419 - Banks"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:KHEcjlXJOVEbA3K71pnYQlCiO2vrS6V1VN7_73jgaso=",
                      "code": "JUR001",
                      "name": "Business locations in HIGHEST risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Iran, Iraq. Highest risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 80,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Iran,Iraq"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:Ktlh--WmU0gBdQ3JmAo5HlCeDqEUDGPixCOtmxeRegQ=",
                      "code": "JUR003",
                      "name": "Business locations in HIGH risk countries",
                      "category": "Jurisdiction",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [],
                      "description": "Operates in: Azerbaijan. High risk jurisdiction(s) based on Sigma Country Risk Ratings",
                      "score": 60,
                      "extras": {
                          "Country": [
                              {
                                  "text": "Azerbaijan"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:gTzGW2E6GatAPelU_JLekXuRF3aJMQY4lOoRjAJhs3A=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Mahmoud Bahmani",
                              "pep": 1,
                              "role": "Has Member of the Board",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2000-12-11T00:00:00Z",
                                      "to": "2007-10-14T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Governor of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2008-09-01T00:00:00Z",
                                      "to": "2013-09-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Member of the Islamic Consultative Assembly (Majlis) for Savojbolagh, Nazarabad and Taleqan, Alborz",
                                      "country": "Iran",
                                      "from": "2016-01-01T00:00:00Z",
                                      "to": "2020-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Member of the Principlist Grand Coalition",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Secretary General of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Mahmoud Bahmani",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise), Country: Iran, From: 2000-12-11, To: 2007-10-14 | Former Governor of the Central Bank of Iran (State-Owned Enterprise), Country: Iran, From: 2008-09-01, To: 2013-09-01 | Former Member of the Islamic Consultative Assembly (Majlis) for Savojbolagh, Nazarabad and Taleqan, Alborz, Country: Iran, From: 2016-01-01, To: 2020-01-01 | Former Member of the Principlist Grand Coalition, Country: Iran | Former Secretary General of the Central Bank of Iran (State-Owned Enterprise), Country: Iran"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Member of the Board"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:XzKAxi-NSYOF6VuqnpDZzsAY7cZQ8YYt203A8ZfgnOs=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Majid Ghasemi",
                              "pep": 1,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Governor of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "1986-01-01T00:00:00Z",
                                      "to": "1989-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Senior Adviser to the Minister of Industry and Mine",
                                      "country": "Iran",
                                      "from": "1997-01-01T00:00:00Z",
                                      "to": "2003-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Deputy Minister of Energy in Charge of Industrial Affairs and Support",
                                      "country": "Iran",
                                      "from": "1989-01-01T00:00:00Z",
                                      "to": "1997-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "1985-01-01T00:00:00Z",
                                      "to": "1986-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Chairperson of the Monetary and Credit Council",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Chairperson of the Supreme Council of Banks",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Member of the Economy Council",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Deputy Director of the Currency Transactions Desk of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "1981-01-01T00:00:00Z",
                                      "to": "1982-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Director of the Exchange Control Desk of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "1982-01-01T00:00:00Z",
                                      "to": "1985-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Acting Deputy Minister of Energy in Charge of Planning and Economic Affairs",
                                      "country": "Iran",
                                      "from": "1992-01-01T00:00:00Z",
                                      "to": "1993-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Chairperson of the Board of Directors of Esfahan Steel Company (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "1997-01-01T00:00:00Z",
                                      "to": "2001-01-01T00:00:00Z"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Majid Ghasemi",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Governor of the Central Bank of Iran (State-Owned Enterprise), Country: Iran, From: 1986-01-01, To: 1989-01-01 | Former Senior Adviser to the Minister of Industry and Mine, Country: Iran, From: 1997-01-01, To: 2003-01-01 | Former Deputy Minister of Energy in Charge of Industrial Affairs and Support, Country: Iran, From: 1989-01-01, To: 1997-01-01 | Former Managing Director of Bank Melli Iran (State-Owned Enterprise), Country: Iran, From: 1985-01-01, To: 1986-01-01 | Former Chairperson of the Monetary and Credit Council, Country: Iran | Former Chairperson of the Supreme Council of Banks, Country: Iran | Former Member of the Economy Council, Country: Iran | Former Deputy Director of the Currency Transactions Desk of the Central Bank of Iran (State-Owned Enterprise), Country: Iran, From: 1981-01-01, To: 1982-01-01 | Former Director of the Exchange Control Desk of the Central Bank of Iran (State-Owned Enterprise), Country: Iran, From: 1982-01-01, To: 1985-01-01 | Former Acting Deputy Minister of Energy in Charge of Planning and Economic Affairs, Country: Iran, From: 1992-01-01, To: 1993-01-01 | Former Chairperson of the Board of Directors of Esfahan Steel Company (State-Owned Enterprise), Country: Iran, From: 1997-01-01, To: 2001-01-01"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:JwQotcW2fJgbspq-nam_DJTQkJP8_BWcxovPGXWhrlc=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "CN",
                              "name": "Abdolnaser Hemmati",
                              "pep": 1,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Director of Melli Bank Plc (State-Owned Enterprise)",
                                      "country": "United Kingdom",
                                      "from": "2013-10-14T00:00:00Z",
                                      "to": "2016-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Member of the Board of Governors | International Monetary Fund (IMF)",
                                      "country": "United States of America"
                                  },
                                  {
                                      "description": "Former President of the Central Insurance of Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "1994-01-01T00:00:00Z",
                                      "to": "2014-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Chairperson of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2013-01-01T00:00:00Z",
                                      "to": "2016-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Managing Director of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2013-01-01T00:00:00Z",
                                      "to": "2016-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Ambassador to China",
                                      "country": "Iran",
                                      "from": "2018-06-24T00:00:00Z",
                                      "to": "2018-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2018-07-25T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Governor (رئیس کل) | Central Bank of the Islamic Republic of Iran (بانک مرکزی جمهوری اسلامی ايران‎)",
                                      "country": "Iran",
                                      "from": "2018-07-25T00:00:00Z",
                                      "to": "2021-05-30T00:00:00Z"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Abdolnaser Hemmati",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Director of Melli Bank Plc (State-Owned Enterprise), Country: United Kingdom, From: 2013-10-14, To: 2016-01-01 | Member of the Board of Governors | International Monetary Fund (IMF), Country: United States of America | Former President of the Central Insurance of Iran (State-Owned Enterprise), Country: Iran, From: 1994-01-01, To: 2014-01-01 | Former Chairperson of the Board of Directors of Bank Melli Iran (State-Owned Enterprise), Country: Iran, From: 2013-01-01, To: 2016-01-01 | Former Managing Director of Bank Melli Iran (State-Owned Enterprise), Country: Iran, From: 2013-01-01, To: 2016-01-01 | Former Ambassador to China, Country: Iran, From: 2018-06-24, To: 2018-01-01 | Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise), Country: Iran, From: 2018-07-25 | Former Governor (رئیس کل) | Central Bank of the Islamic Republic of Iran (بانک مرکزی جمهوری اسلامی ايران‎), Country: Iran, From: 2018-07-25, To: 2021-05-30"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: CN | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:vO9-HdQ2474teYsMaR1U6-TfBky6qIXl-WTUPZsE9Lg=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Gholamreza Panahi",
                              "pep": 1,
                              "role": "Has Member of the Board",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Director of Melli Bank Plc (State-Owned Enterprise)",
                                      "country": "United Kingdom",
                                      "from": "2016-07-08T00:00:00Z"
                                  },
                                  {
                                      "description": "Deputy Member of the Board of Governors, International Monetary Fund (IMF) for Iran",
                                      "country": "United States of America"
                                  },
                                  {
                                      "description": "Deputy Managing Director of Melli Bank Plc (State-Owned Enterprise) in Charge of Foreign Exchange and International Affairs",
                                      "country": "Iran",
                                      "from": "2013-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2015-02-25T00:00:00Z",
                                      "to": "2017-06-07T00:00:00Z"
                                  },
                                  {
                                      "description": "Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Foreign Exchange Affairs",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Gholamreza Panahi",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Director of Melli Bank Plc (State-Owned Enterprise), Country: United Kingdom, From: 2016-07-08 | Deputy Member of the Board of Governors, International Monetary Fund (IMF) for Iran, Country: United States of America | Deputy Managing Director of Melli Bank Plc (State-Owned Enterprise) in Charge of Foreign Exchange and International Affairs, Country: Iran, From: 2013-01-01 | Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise), Country: Iran, From: 2015-02-25, To: 2017-06-07 | Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Foreign Exchange Affairs, Country: Iran | Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise), Country: Iran"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Member of the Board"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:6FBs7_FNyKodhICMA_vsk6WCsZkP5L8uaB9DpLlhYhM=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "DE",
                              "name": "Ramin Pashaee Fam",
                              "pep": 1,
                              "role": "Has Member of the Board",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Chairperson of the Board of Directors of Bank Sepah (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2010-01-01T00:00:00Z",
                                      "to": "2013-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Managing Director of Bank Sepah (State-Owned Enterprise)",
                                      "country": "Iran",
                                      "from": "2010-01-01T00:00:00Z",
                                      "to": "2013-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Deputy Chairperson of the Executive Board of the National Development Fund",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Economic Affairs",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former General Director of the Commercial Affairs Department, Management and Planning Organisation",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise)",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Chairperson of the Board of Directors of European-Iranian Trade Bank (State-Owned Enterprise)",
                                      "country": "Germany",
                                      "from": "2016-08-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Member of the Board of Directors of European-Iranian Trade Bank (State-Owned Enterprise)",
                                      "country": "Germany",
                                      "to": "2016-07-31T00:00:00Z"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Ramin Pashaee Fam",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Chairperson of the Board of Directors of Bank Sepah (State-Owned Enterprise), Country: Iran, From: 2010-01-01, To: 2013-01-01 | Former Managing Director of Bank Sepah (State-Owned Enterprise), Country: Iran, From: 2010-01-01, To: 2013-01-01 | Former Deputy Chairperson of the Executive Board of the National Development Fund, Country: Iran | Former Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Economic Affairs, Country: Iran | Former General Director of the Commercial Affairs Department, Management and Planning Organisation, Country: Iran | Former Member of the Board of Directors of Bank Melli Iran (State-Owned Enterprise), Country: Iran | Former Chairperson of the Board of Directors of European-Iranian Trade Bank (State-Owned Enterprise), Country: Germany, From: 2016-08-01 | Former Member of the Board of Directors of European-Iranian Trade Bank (State-Owned Enterprise), Country: Germany, To: 2016-07-31"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: DE | Relationship: Has Member of the Board"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:ckbuhrhRDDqkzzstO-9liSmJHYoYSaCCoV3jwmKR25o=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Abolfazl Najarzadeh",
                              "pep": 1,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Deputy Managing Director (معاون مدیر عامل) | State-Owned Enterprise (شرکت دولتی)",
                                      "country": "Iran",
                                      "from": "2020-06-20T00:00:00Z"
                                  },
                                  {
                                      "description": "Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Administrative and Financial Affairs",
                                      "country": "Iran",
                                      "from": "2018-11-17T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Secretary of the Board of the Directors of Bank of Industry and Mine",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise)",
                                      "country": "Iran"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Abolfazl Najarzadeh",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Deputy Managing Director (معاون مدیر عامل) | State-Owned Enterprise (شرکت دولتی), Country: Iran, From: 2020-06-20 | Deputy Governor of the Central Bank of Iran (State-Owned Enterprise) in Charge of Administrative and Financial Affairs, Country: Iran, From: 2018-11-17 | Former Secretary of the Board of the Directors of Bank of Industry and Mine, Country: Iran | Member of the Executive Board of the Central Bank of Iran (State-Owned Enterprise), Country: Iran"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:hffwFzHwnHLeZlyiNnFs1fUS6XhVsQ62OcXWAx4jcIc=",
                      "code": "PEP001",
                      "name": "Associated with level 1 PEP",
                      "category": "PEP",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [
                          {
                              "country": "IR",
                              "name": "Mohammad Reza Farzin",
                              "pep": 1,
                              "role": "Has Director",
                              "sanctioned": "verified no",
                              "political_positions": [
                                  {
                                      "description": "Former Deputy Minister of Economic Affairs and Finance in Charge of Economic Affairs",
                                      "country": "Iran",
                                      "from": "2009-01-01T00:00:00Z",
                                      "to": "2012-01-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Former Managing Director of the National Development Fund",
                                      "country": "Iran",
                                      "from": "2012-06-01T00:00:00Z"
                                  },
                                  {
                                      "description": "Adviser to the Deputy Minister of Economic Affairs and Finance in Charge of Planning and Economic Studies",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Former Member of the Board of Directors of Bank Keshavarzi Iran (State-Owned Enterprise)",
                                      "country": "Iran"
                                  },
                                  {
                                      "description": "Managing Director (مدیر عامل) | State-Owned Enterprise (شرکت دولتی)",
                                      "country": "Iran"
                                  }
                              ]
                          }
                      ],
                      "linked_addresses": [],
                      "description": "Mohammad Reza Farzin",
                      "score": 50,
                      "extras": {
                          "Political Positions": [
                              {
                                  "text": "Former Deputy Minister of Economic Affairs and Finance in Charge of Economic Affairs, Country: Iran, From: 2009-01-01, To: 2012-01-01 | Former Managing Director of the National Development Fund, Country: Iran, From: 2012-06-01 | Adviser to the Deputy Minister of Economic Affairs and Finance in Charge of Planning and Economic Studies, Country: Iran | Former Member of the Board of Directors of Bank Keshavarzi Iran (State-Owned Enterprise), Country: Iran | Managing Director (مدیر عامل) | State-Owned Enterprise (شرکت دولتی), Country: Iran"
                              }
                          ],
                          "Summary": [
                              {
                                  "text": "Nationality: IR | Relationship: Has Director"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  },
                  {
                      "urn": "urn:sigma:indicator:AxhRTf9pkduj3wbWsNiV9r5PuPz76TgvHkcjB6YhaBo=",
                      "code": "ADD002",
                      "name": "Virtual Office Address Detected",
                      "category": "Address",
                      "sources": [],
                      "indicator_facet": "",
                      "linked_events": [],
                      "linked_people": [],
                      "linked_addresses": [
                          {
                              "id": 1417339207682,
                              "number_of_entities": 176005,
                              "address": "521 5th Avenue, New York City, New York, United States",
                              "country_code": "US",
                              "country_name": ""
                          }
                      ],
                      "description": "521 5th Avenue, New York City, New York, United States",
                      "score": 60,
                      "extras": {
                          "Matched Address": [
                              {
                                  "text": "521 5th Avenue, New York City, New York, United States"
                              }
                          ],
                          "Type": [
                              {
                                  "text": "Virtual Office Address"
                              }
                          ]
                      },
                      "isDecisionedAgainst": false
                  }
              ],
              "locations": [
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "140 Ferdowsi Ave. Jomhouri Ave. Istanbul Junction Tehran 1135937641"
                      ]
                  },
                  {
                      "country": "Azerbaijan",
                      "country_code": "AZ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "23 Nobel Avenue Baku"
                      ]
                  },
                  {
                      "country": "France",
                      "country_code": "FR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "43 Avenue Montaigne Paris 75008"
                      ]
                  },
                  {
                      "country": "United States of America",
                      "country_code": "US",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "767 5th Ave, 44th Fl. New York New York 10153"
                      ]
                  },
                  {
                      "country": "United Kingdom",
                      "country_code": "GB",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "98a Kensington High Street London W8 4SG"
                      ]
                  },
                  {
                      "country": "Iraq",
                      "country_code": "IQ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Al Ashar Estiqlal Street - Hal Al Zohor Basra"
                      ]
                  },
                  {
                      "country": "Iraq",
                      "country_code": "IQ",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Bank Melli Iran Bldg 111 St 24, 929 Arasat Baghdad"
                      ]
                  },
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Bank Melli Iran Building Ferdowsi Avenue Tehran 11365-144"
                      ]
                  },
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "No. 136 Mirdamad Boulevard Opposite Al-ghadir Mosque Tehran"
                      ]
                  },
                  {
                      "country": "Iran",
                      "country_code": "IR",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 11365-171 Ferdowsi Av. Tehran"
                      ]
                  },
                  {
                      "country": "United States of America",
                      "country_code": "US",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1420 New York New York 10153"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1888, Clock Tower, Industrial Rd Al Ain Club Bldg, Al Ain Abu Dhabi"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1894, Al Wasl Rd Jumeirah Dubai"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 1894, Baniyas St, Deira Dubai"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 248, Hamad Bin Abdulla St Fujairah"
                      ]
                  },
                  {
                      "country": "Oman",
                      "country_code": "OM",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 2643, Ruwi, 112 Muscat"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 2656, Liva Street Abu Dhabi"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 3093, Ahmed Seddiqui Bldg Khalid Bin El-Walid St Bur-Dubai Dubai"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 459, Al Borj St Sharjah"
                      ]
                  },
                  {
                      "country": "United Arab Emirates",
                      "country_code": "AE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "PO Box 5270 Oman Street Al Nakheel Ras Al-Khaimah"
                      ]
                  },
                  {
                      "country": "Germany",
                      "country_code": "DE",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Postfach 112 129 Holzbruecke 2 Hamburg 20421"
                      ]
                  },
                  {
                      "country": "Hong Kong",
                      "country_code": "HK",
                      "type": "Unspecified",
                      "sources": [],
                      "addresses": [
                          "Room 704-6, Wheelock Hse 20 Pedder St"
                      ]
                  }
              ],
              "company_registry": {
                  "addresses": null,
                  "founded": "1927-08-05T00:00:00Z",
                  "telephone": "+98 (21) 60991",
                  "website": "www.bmi.ir",
                  "status": null,
                  "lines_of_business": [],
                  "incorporation_types": null,
                  "economic_activities": {},
                  "corporate_numbers": [
                      {
                          "number": "MELIIRTH",
                          "country": null,
                          "register": "BIC Number"
                      },
                      {
                          "number": "60",
                          "country": null,
                          "register": "Business Registration Number"
                      }
                  ],
                  "ownership": null,
                  "subsidiaries": null
              },
              "vessel": null,
              "person": null,
              "potential_ubo": null
          }
      ]
  },
  "configuration": {
      "id": 39,
      "created": "2022-09-19T20:51:33.546305Z",
      "updated": "2022-11-09T19:48:44.586206Z",
      "created_by": "urn:sigma:user:5d2d8949-ba9f-3757-8041-6242cf064818",
      "updated_by": "urn:sigma:user:5d2d8949-ba9f-3757-8041-6242cf064818",
      "createdByName": "Nathan Piazza",
      "updatedByName": "Nathan Piazza",
      "archived": null,
      "name": "Brazilian Politicans Filter Set",
      "feature": "monitoring",
      "is_default": false,
      "organization_id": "",
      "settings": {
          "events": [],
          "indicators": [],
          "languages": [],
          "sources": [
              "ofac_sdn_list",
              "ofac_people",
              "acuris_business",
              "acuris_people",
              "sigma_news"
          ],
          "threshold": 0.9
      }
  }
};

export const secondHop = {
  "direct_owners": [
      {
          "name": "Ms. Letitia Diergaardt",
          "type": "person",
          "relationship": "Has Shareholder",
          "full_relationships": [
              "shareholder of"
          ],
          "country": "",
          "sanctioned": false,
          "shares": null,
          "pep": null,
          "political_positions": []
      },
      {
        "name": "Ms. Letitia Diergaardt 2",
        "type": "person",
        "relationship": "Has Shareholder",
        "full_relationships": [
            "shareholder of"
        ],
        "country": "",
        "sanctioned": false,
        "shares": null,
        "pep": null,
        "political_positions": []
    },
    {
      "name": "Ms. Letitia Diergaardt 3",
      "type": "person",
      "relationship": "Has Shareholder",
      "full_relationships": [
          "shareholder of"
      ],
      "country": "",
      "sanctioned": false,
      "shares": null,
      "pep": null,
      "political_positions": []
  }
  ],
  "companies": [
      {
          "name": "Lotus Holding Company Limited",
          "type": "company",
          "relationship": "Is Linked To",
          "full_relationships": [
              "intermediary of"
          ],
          "country": "Latvia",
          "sanctioned": false
      },
      {
        "name": "Lotus Holding Company Limited 2",
        "type": "company",
        "relationship": "Is Linked To",
        "full_relationships": [
            "intermediary of"
        ],
        "country": "Latvia",
        "sanctioned": false
    },
    {
      "name": "Lotus Holding Company Limited 3",
      "type": "company",
      "relationship": "Is Linked To",
      "full_relationships": [
          "intermediary of"
      ],
      "country": "Latvia",
      "sanctioned": false
  }
  ],
  "people": [
      {
          "name": "Ms. Letitia Diergaardt",
          "type": "person",
          "relationship": "Has Director",
          "full_relationships": [
              "director of"
          ],
          "country": "Kazakhstan",
          "sanctioned": false,
          "pep": null,
          "dob": null,
          "political_positions": []
      },
      {
        "name": "Ms. Letitia Diergaardt 2",
        "type": "person",
        "relationship": "Has Director",
        "full_relationships": [
            "director of"
        ],
        "country": "Kazakhstan",
        "sanctioned": false,
        "pep": null,
        "dob": null,
        "political_positions": []
    },
    {
      "name": "Ms. Letitia Diergaardt 3",
      "type": "person",
      "relationship": "Has Director",
      "full_relationships": [
          "director of"
      ],
      "country": "Kazakhstan",
      "sanctioned": false,
      "pep": null,
      "dob": null,
      "political_positions": []
  }
  ]
};