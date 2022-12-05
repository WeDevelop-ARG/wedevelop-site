import GreenSharpCheck from 'assets/about_us/nearshore_outsourcing/green_sharp_check.component.svg'
import RedSharpXMark from 'assets/about_us/nearshore_outsourcing/red_sharp_xmark.component.svg'

export default function useNearshoreVsOffshoreTableInfo () {
  const table = {
    rows: [
      {
        id: '1',
        cells: ['Communication', 'Fluent / Easy', 'Fluent / Easy', 'Strong accent / Poor grammar', 'Depends on the freelancer']
      },
      {
        id: '2',
        cells: ['Hiring Time & Fees', '$', '$$$', '$', '$$']
      },
      {
        id: '3',
        cells: ['Failure Rate', 'Very Low', 'Low', 'High', 'Very High']
      },
      {
        id: '4',
        cells: ['Termination Fees', '-', '$$$$', 'Depends on the agency', '-']
      },
      {
        id: '5',
        cells: ['Time Difference', '0 to 4Hs', '-', '4 to 12Hs', '0 to 12Hs']
      },
      {
        id: '6',
        cells: ['Pre-Vetted Candidates', <GreenSharpCheck />, <RedSharpXMark />, 'Maybe', <RedSharpXMark />]
      },
      {
        id: '7',
        cells: ['Time to Hire Developers', '0-3 weeks', '3-6 months', '1-4 weeks', '0-4 weeks']
      }
    ]
  }

  return {
    table
  }
}
