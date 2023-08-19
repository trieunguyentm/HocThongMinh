import React from "react"

interface ClassPageProps {
  classPage: string
}

const ClassPage: React.FC<ClassPageProps> = ({ classPage }) => {
  return (
    <div>
      {classPage}
    </div>
  )
}

export default ClassPage