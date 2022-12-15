import { useEffect } from 'react'
import { getSwipes } from 'web/lib/firebase/views'
import { usePersistentState, inMemoryStore } from './use-persistent-state'
import { useUser } from './use-user'

export const useSwipes = () => {
  const user = useUser()
  const [swipes, setSwipes] = usePersistentState<string[]>([], {
    store: inMemoryStore(),
    key: 'user-swipes',
  })
  useEffect(() => {
    if (user)
      getSwipes(user.id).then((s) => setSwipes(s.map((swipe: any) => swipe.id)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!user, getSwipes])
  return swipes
}
