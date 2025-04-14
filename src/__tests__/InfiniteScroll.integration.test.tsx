import { render, waitFor, act, screen } from '@testing-library/react'
import { BoardSection } from '@/components/BoardSection'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const fetchNextPageMock = jest.fn()

jest.mock('@/hooks/useInfiniteAssets', () => ({
    useInfiniteAssets: () => ({
        data: {
            pages: [
                {
                    data: {
                        clips: Array.from({ length: 20 }).map((_, i) => ({
                            id: `clip-${i}`,
                            title: `Clip ${i}`,
                            importedName: null,
                            type: 'photo',
                            assets: {
                                image: 'https://picsum.photos/400/300',
                            },
                        })),
                    },
                    pagination: {
                        hasMore: true,
                        cursor: 'next-cursor',
                    },
                },
            ],
        },
        isLoading: false,
        isError: false,
        fetchNextPage: fetchNextPageMock,
        hasNextPage: true,
        isFetchingNextPage: false,
    }),
}))
// Mock data
const mockBoards = [
  { id: '1', title: 'Board One', thumbnails: ['https://picsum.photos/200'] },
  { id: '2', title: 'Board Two', thumbnails: ['https://picsum.photos/200'] },
]

const mockPaginatedClips = (start: number, count: number) => {
  const data = Array.from({ length: count }, (_, i) => ({
    id: `clip-${start + i}`,
    title: `Clip ${start + i}`,
    importedName: `Clip ${start + i}`,
    type: 'photo',
    assets: {
      image: 'https://picsum.photos/400/300',
    },
  }))

  return {
    data: {
      clips: data,
      total: start + count,
    },
    pagination: {
      hasMore: start + count < 20,
      cursor: start + count < 20 ? `${start + count}` : null,
    },
  }
}

jest.mock('@/app/api/boards', () => ({
    fetchBoards: () =>
        Promise.resolve({
            data: [],
        }),
} ) )
jest.mock('@/app/api/clips', () => ({
  fetchAssets: jest.fn(),
}))

const mockObserve = jest.fn()
const mockUnobserve = jest.fn()
let observerCallback: IntersectionObserverCallback
describe('Given a user is interacting with the page and infinite scroll is active.', () => {
    beforeAll(() => {
        global.IntersectionObserver = jest.fn((cb) => {
            observerCallback = cb
            return {
                observe: mockObserve,
                unobserve: mockUnobserve,
                disconnect: jest.fn(),
                takeRecords: jest.fn(),
            }
        }) as unknown as typeof IntersectionObserver
    })
    it('When the user scrolls and observer is triggered. Then it triggers fetchNextPage. ', async () => {
        const queryClient = new QueryClient()

        render(
            <QueryClientProvider client={queryClient}>
                <BoardSection />
            </QueryClientProvider>
        )

        // Simulate IntersectionObserver triggering
        const fakeEntry = [
            { isIntersecting: true },
        ] as IntersectionObserverEntry[]

        act(() => {
            observerCallback(fakeEntry, {} as IntersectionObserver)
        })

        await waitFor(() => {
            expect(fetchNextPageMock).toHaveBeenCalled()
        })
    } )
    
})
