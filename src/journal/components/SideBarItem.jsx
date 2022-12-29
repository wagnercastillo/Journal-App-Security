import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

export const SideBarItem = ({ title, body, id, date, imageURls = [] }) => {

    const dispatch = useDispatch();
    const payload = { title, body, id, date, imageURls };


    const onClickNote = () => {
        dispatch(setActiveNote(payload));
    }

    const newTittle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote} >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
