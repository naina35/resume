import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// PDF Styles
const pdfStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
    color: '#333',
  },
  header: {
    marginBottom: 25,
    paddingBottom: 15,
    borderBottom: '2pt solid #2563eb',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  contact: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: '1pt solid #e5e7eb',
  },
  summaryText: {
    fontSize: 11,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  educationHeader: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  educationDetails: {
    fontSize: 11,
    marginBottom: 2,
    color: '#4b5563',
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  companyRole: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 11,
    color: '#6b7280',
  },
  description: {
    fontSize: 11,
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  techStack: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 3,
  },
  projectFeatures: {
    fontSize: 11,
    marginBottom: 3,
  },
  projectLinks: {
    fontSize: 10,
    color: '#2563eb',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    padding: '4 8',
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    fontSize: 10,
    marginBottom: 4,
  },
});


export default function ResumePDF({ basic, summary, education, experience, projects, skills }) {
  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {/* Header */}
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.name}>
            {basic.firstName} {basic.lastName}
          </Text>
          <Text style={pdfStyles.contact}>Phone: {basic.phone}</Text>
          {basic.email && <Text style={pdfStyles.contact}>Email: {basic.email}</Text>}
          {basic.location && <Text style={pdfStyles.contact}>Location: {basic.location}</Text>}
        </View>

        {/* Summary */}
        {summary && (
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionTitle}>Professional Summary</Text>
            <Text style={pdfStyles.summaryText}>{summary}</Text>
          </View>
        )}

        {/* Education */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Education</Text>
          <Text style={pdfStyles.educationHeader}>
            {education.degree} in {education.branch}
          </Text>
          <Text style={pdfStyles.educationDetails}>{education.college}</Text>
          <Text style={pdfStyles.educationDetails}>
            {education.from} - {education.to} | CGPA: {education.cgpa}
          </Text>
        </View>

        {/* Experience */}
        {experience.length > 0 && (
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionTitle}>Experience</Text>
            {experience.map((exp, index) => (
              <View key={index} style={pdfStyles.experienceItem}>
                <View style={pdfStyles.experienceHeader}>
                  <Text style={pdfStyles.companyRole}>
                    {exp.role} at {exp.company}
                  </Text>
                  <Text style={pdfStyles.duration}>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </View>
                <Text style={pdfStyles.description}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionTitle}>Projects</Text>
            {projects.map((project, index) => (
              <View key={index} style={pdfStyles.projectItem}>
                <Text style={pdfStyles.projectTitle}>{project.title}</Text>
                <Text style={pdfStyles.techStack}>
                  Tech Stack: {project.techStack.join(', ')}
                </Text>
                <Text style={pdfStyles.projectFeatures}>
                  {project.features.join(' • ')}
                </Text>
                <View style={pdfStyles.projectLinks}>
                  {project.githubLink && (
                    <Link src={project.githubLink}>GitHub: {project.githubLink}</Link>
                  )}
                  {project.liveLink && (
                    <Link src={project.liveLink}> | Live: {project.liveLink}</Link>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.sectionTitle}>Skills</Text>
            <View style={pdfStyles.skillsContainer}>
              {skills.map((skill, index) => (
                <Text key={index} style={pdfStyles.skill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}