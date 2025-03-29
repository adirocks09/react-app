const distributions = [
  {
    unit: {
      name: "FDA",
      type: "Account",
      country: "USA",
      formats: [
        {
          name: "CIOMS",
          medium: "Email",
          privacy: "GDPR",
          anchors: [
            {
              name: "FDA-CIOMS-Anc-1",
              timeline: 7,
              reportType: "AA",
            },
            {
              name: "FDA-CIOMS-Anc-2",
              timeline: 11,
              reportType: "AB",
            },
          ],
        },
        {
          name: "E2B",
          medium: "Gateway",
          privacy: "NON-GDPR",
          anchors: [
            {
              name: "FDA-E2B-Anc-1",
              timeline: 15,
              reportType: "AC",
            },
            {
              name: "FDA-E2B-Anc-2",
              timeline: 21,
              reportType: "AD",
            },
          ],
        },
      ],
    },
  },
  {
    unit: {
      name: "PMDA",
      type: "Company-Unit",
      country: "Japan",
      formats: [
        {
          name: "Medwatch",
          medium: "Email",
          privacy: "GDPR",
          anchors: [
            {
              name: "PMDA-Medwatch-Anc-1",
              timeline: 7,
              reportType: "AA",
            },
            {
              name: "PMDA-Medwatch-Anc-2",
              timeline: 11,
              reportType: "AB",
            },
          ],
        },
        {
          name: "PMDA-R3",
          medium: "Gateway",
          privacy: "NON-GDPR",
          anchors: [
            {
              name: "PMDA-R3-Anc-1",
              timeline: 15,
              reportType: "AC",
            },
            {
              name: "PMDA-R3-Anc-2",
              timeline: 21,
              reportType: "AD",
            },
          ],
        },
      ],
    },
  },
  {
    unit: {
      name: "EMEA",
      type: "Account",
      country: "Europe",
      formats: [
        {
          name: "Bfarm",
          medium: "Email",
          privacy: "GDPR",
          anchors: [
            {
              name: "EMEA-Bfarm-Anc-1",
              timeline: 7,
              reportType: "AA",
            },
            {
              name: "EMEA-Bfarm-Anc-2",
              timeline: 11,
              reportType: "AB",
            },
          ],
        },
        {
          name: "MIR-Pdf",
          medium: "Gateway",
          privacy: "NON-GDPR",
          anchors: [
            {
              name: "EMEA-MIR-Pdf-Anc-1",
              timeline: 15,
              reportType: "AC",
            },
            {
              name: "EMEA-MIR-Pdf-Anc-2",
              timeline: 21,
              reportType: "AD",
            },
          ],
        },
      ],
    },
  },
];

export default distributions;
