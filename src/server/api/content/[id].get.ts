import { ContentResponse } from '@/types/api'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    const response = await $fetch(
      `http://digden_api_nginx/api/content/${event.context.params.id}`
    )
    return response
  } catch (error: any) {
    return createError({
      statusCode: error.response.status,
      statusMessage: error.message,
      data: error.data
    })
  }
})
