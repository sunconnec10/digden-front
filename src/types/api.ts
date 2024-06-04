export type Label = {
  title: string | null
}

export type ContentResponse = {
  image_url: string | null
  title: string | null
  text: string | null
  content_updated_date: string | null
  labels: Label[]
  summary: string | null
  content_details: {
    image_url: string | null
    body_title: string | null
    body_text: string | null
  }
}
