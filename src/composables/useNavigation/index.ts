export const useNavigation = () => {
  const config = useRuntimeConfig()

  const TOP = {
    id: 'top',
    name: 'トップ',
    link: `${config.public.seniorRootUrl}`,
  } as const

  return {
    TOP,
  }
}
