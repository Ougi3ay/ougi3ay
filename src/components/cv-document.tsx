import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Modern CV style
const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: 'Helvetica' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  subHeader: { fontSize: 16, fontWeight: 'bold', marginBottom: 6, color: '#1f2937' },
  section: { marginBottom: 12 },
  text: { fontSize: 12, marginBottom: 4, lineHeight: 1.4 },
  list: { marginLeft: 10 },
  link: { color: '#2563eb', textDecoration: 'underline' },
});

interface CvDocumentProps {
  data: {
    name: string;
    title: string;
    about?: { summary?: string };
    skills?: Array<{ name: string }>;
    projects?: Array<{ id: number; name: string; description: string; link: string }>;
    experiences?: Array<{ id: number; role: string; company: string; description: string; duration: string }>;
    educations?: Array<{ id: number; degree: string; institution: string; description: string; year: string }>;
    cvOptions?: {
      includeExperiences?: boolean;
      includeEducation?: boolean;
      includeProjects?: boolean;
      includeSkills?: boolean;
    };
  };
}

export function CvDocument({ data }: CvDocumentProps) {
  const {
    name,
    title,
    about,
    skills = [],
    projects = [],
    experiences = [],
    educations = [],
    cvOptions = {},
  } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.header}>{name || 'Your Name'}</Text>
          <Text style={styles.text}>{title || ''}</Text>
        </View>

        {/* About */}
        {about?.summary && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>About Me</Text>
            <Text style={styles.text}>{about.summary}</Text>
          </View>
        )}

        {/* Experiences */}
        {cvOptions.includeExperiences && experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Experience</Text>
            {experiences.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {exp.role} — {exp.company} ({exp.duration})
                </Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {cvOptions.includeEducation && educations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Education</Text>
            {educations.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {edu.degree} — {edu.institution} ({edu.year})
                </Text>
                <Text style={styles.text}>{edu.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {cvOptions.includeSkills && skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Skills</Text>
            <Text style={styles.text}>{skills.map((s) => s.name).join(', ')}</Text>
          </View>
        )}

        {/* Projects */}
        {cvOptions.includeProjects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Projects</Text>
            {projects.map((project) => (
              <View key={project.id} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: 'bold' }}>{project.name}</Text>
                <Text style={styles.text}>{project.description}</Text>
                <Link style={styles.link} src={project.link}>
                  {project.link}
                </Link>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}