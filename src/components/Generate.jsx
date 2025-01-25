import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Times-Roman',
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    textDecoration: 'underline',
  },
  text: {
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skill: {
    padding: 4,
    border: 1,
    borderRadius: 4,
    marginRight: 5,
  },
});

// `Generate` component
export default function Generate({ Basic, edu, skills, exp }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <Text style={styles.header}>
          {Basic.fn} {Basic.ln}
        </Text>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          Phone: {Basic.pn}
        </Text>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.text}>College: {edu.college}</Text>
          <Text style={styles.text}>
            Degree: {edu.degree}, Branch: {edu.branch}
          </Text>
          <Text style={styles.text}>
            Duration: {edu.from} - {edu.to}
          </Text>
          <Text style={styles.text}>CGPA: {edu.cgpa}</Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {exp.length > 0 ? (
            exp.map((item, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Company:</Text>{' '}
                  {item.company}
                </Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Role:</Text> {item.role}
                </Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Duration:</Text>{' '}
                  {item.startDate} - {item.endDate}
                </Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Description:</Text>{' '}
                  {item.description}
                </Text>
              </View>
            ))
          ) : (
            <Text>No experience added.</Text>
          )}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.length > 0 ? (
            <View style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill}
                </Text>
              ))}
            </View>
          ) : (
            <Text>No skills added.</Text>
          )}
        </View>
      </Page>
    </Document>
  );
}
