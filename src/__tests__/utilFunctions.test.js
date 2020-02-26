import {shortenText} from '../utils/functions'
import {wordCount,attachUserName} from '../../server/utils'
import {shortText,longText,posts,users} from './__data__/testData'

test('Will not shorten if <100 chars', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('Will shorten Text',() => {
    let shortenedText = shortenText(longText)
    expect(shortenedText).not.toHaveLength(longText.length)
    expect(shortenedText.slice(-3)).toBe('...')
})

test('Wordcount Works',() => {
    expect(wordCount(posts)).toBe(233)
})

test('AttachUserName should attach a Username to each post', () => {
    let newPosts = attachUserName(users,posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('AttachUsername will remove any post without matching user',() => {
    let newPosts = attachUserName(users,posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})