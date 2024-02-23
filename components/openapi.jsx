import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

function OpenAPI() {

  return (
    <div>
      <API 
        apiDescriptionDocument='openapi.yaml'
        layout="stacked"
        router="static"
      />
    </div>
  )
}

export default function MyApp() {
  return <OpenAPI />
}
