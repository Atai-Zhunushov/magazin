// import React from 'react';
// import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";
// import { useMediaQuery } from '@mui/material';
//
// const FilteredItems = ({ items, addToCart }) => {
//     const isMobile = useMediaQuery('(max-width:600px)');
//
//     return (
//         <div>
//             {items.map((post) => (
//                 <Card key={post.id} className={isMobile ? 'image2-mobile' : 'image_page2'}>
//                     <CardMedia component="img" className={isMobile ? 'image-page-mobile' : 'image-page-desktop'} image={post.image} alt={post.title} />
//                     <CardContent className={isMobile ? 'card-content-mobile' : 'card-content-desktop'}>
//                         <Typography variant="h6" component="div" fontSize={isMobile ? 10 : 20}>
//                             {post.title}
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" fontSize={isMobile ? 10 : 18}>
//                             {post.price}
//                         </Typography>
//                     </CardContent>
//                     <CardActions className={isMobile ? 'card_actons_btn' : 'card_actons_btn_desktop'}>
//                         <Button size="small" className={isMobile ? 'card_actons_btn' : 'card_actons_btn_desktop'} onClick={() => addToCart(post)}>Добавить в корзину</Button>
//                     </CardActions>
//                 </Card>
//             ))}
//         </div>
//     );
// };
//
// export default FilteredItems;
