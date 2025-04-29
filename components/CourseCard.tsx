// components/CourseCard.tsx
type CourseCardProps = {
    title: string;
    description: string;
    image: string;
  };
  
  export default function CourseCard({ title, description, image }: CourseCardProps) {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '16px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff'
      }}>
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
        <h2 style={{ fontSize: '20px', margin: '12px 0 8px' }}>{title}</h2>
        <p style={{ fontSize: '16px', color: '#666' }}>{description}</p>
      </div>
    );
  }
  