import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

interface LetterAvatarsProps {
  size?: number
}

const LetterAvatars: React.FC<LetterAvatarsProps> = ({ size }) => {
  // Lấy state từ store
  const currentUser = useSelector((state: RootState) => state.auth.login.currentUser);
  if (currentUser !== null) {
    const words = currentUser?.name.split(" ");
    // Set name
    let name = (words?.length >= 2) ? `${words[0][0]}${words[words?.length - 1][0]}` : `${words[0][0]}${words[0][0]}`;
    // Set color
    const color = stringToColor(currentUser?.name);

    return (
      <Avatar sx={{ bgcolor: color, width: `${size ? `${size}px` : 'none'}`, height: `${size ? `${size}px` : 'none'}`, fontSize: `${size ? '60px' : 'none'}` }}>
        {name}
      </Avatar>
    );
  }

}

export default LetterAvatars
