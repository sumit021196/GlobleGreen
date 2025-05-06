import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

const InvestorContainer = styled.div`
  padding: 4rem 0;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #267a4a;
  }
`;

const MeetingList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MeetingItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const MeetingDate = styled.div`
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

function InvestorRelations() {
  return (
    <InvestorContainer>
      <div className="container">
        <Section>
          <SectionTitle>Financial Reports</SectionTitle>
          <CardGrid>
            <Card>
              <CardTitle>Annual Reports</CardTitle>
              <p>Access our comprehensive annual reports detailing our financial performance and strategic initiatives.</p>
              <DownloadButton href="#">
                <FaDownload /> Download 2023 Report
              </DownloadButton>
            </Card>
            <Card>
              <CardTitle>Quarterly Reports</CardTitle>
              <p>Review our quarterly financial statements and business updates.</p>
              <DownloadButton href="#">
                <FaDownload /> Download Q4 2023
              </DownloadButton>
            </Card>
            <Card>
              <CardTitle>Investor Presentations</CardTitle>
              <p>View our latest investor presentations and strategic overviews.</p>
              <DownloadButton href="#">
                <FaDownload /> Download Latest
              </DownloadButton>
            </Card>
          </CardGrid>
        </Section>

        <Section>
          <SectionTitle>Upcoming Meetings</SectionTitle>
          <Card>
            <MeetingList>
              <MeetingItem>
                <MeetingDate>March 15, 2024</MeetingDate>
                <p>Annual General Meeting - Virtual</p>
              </MeetingItem>
              <MeetingItem>
                <MeetingDate>April 10, 2024</MeetingDate>
                <p>Q1 2024 Earnings Call</p>
              </MeetingItem>
              <MeetingItem>
                <MeetingDate>June 5, 2024</MeetingDate>
                <p>Investor Day - New York</p>
              </MeetingItem>
            </MeetingList>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Shareholder Information</SectionTitle>
          <Card>
            <CardTitle>Stock Information</CardTitle>
            <p>Symbol: GGRE</p>
            <p>Exchange: NASDAQ</p>
            <p>Current Price: $45.67</p>
            <p>52 Week Range: $38.90 - $52.30</p>
          </Card>
        </Section>
      </div>
    </InvestorContainer>
  );
}

export default InvestorRelations; 