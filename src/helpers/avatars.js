import fs from 'fs'
import { GetRandomElementFromList } from './random'

const avatarFolderPath = 'assets/images/avatars'

const ListOfAvatarsByName = () =>
  fs.readdirSync(avatarFolderPath).map((file) => {
    file
  })

const GetRandomAvatarName = () => {
  const listOfAvatars = ['daniel.jpg', 'elliot.jpg', 'jenny.jpg', 'matthew.jpg', 'molly.jpg', 'steve.jpg']
  return GetRandomElementFromList(listOfAvatars)
}

export { ListOfAvatarsByName, GetRandomAvatarName }
