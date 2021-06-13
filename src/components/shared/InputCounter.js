import React, { useState } from "react";
import propTypes from "prop-types";
import { Button, ButtonGroup, InputBase } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
// import {
//   updateCart,
// } from 'store/actions/cart-action'
// import useStyles from "./style";


import plus from 'assets/images/icons/plus.svg';
import plusInvert from 'assets/images/icons/plus-invert.svg';
import minus from 'assets/images/icons/minus.svg';
import minusInvert from 'assets/images/icons/minus-invert.svg';

const useStyles = makeStyles( theme => ({

    inputCounter: {
        // padding: 10,
        // width: 20,
        width:'5vh',
        fontWeight: 600,
        fontSize: 12,
        textAlign: 'right',
    },

    buttonCounter: {
        backgroundColor: theme.palette.primary.main,
        border: 0,
        borderRadius: '4px!important',
        padding: 2,
        minWidth: 25,
        height: 25,

        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },

        '&.Mui-disabled': {
            backgroundColor: theme.palette.background.default,
            border: 0,
            cursor: 'pointer',
            pointerEvents: 'all',
        },
    },

    iconMinus: {
        width: 14,
        height: 14,
        backgroundImage: `url(${minus})`,
        backgroundSize: '14px 14px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },

    iconMinusInvert: {
        width: 14,
        height: 14,
        backgroundImage: `url(${minusInvert})`,
        backgroundSize: '14px 14px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    
    iconPlus: {
        width: 14,
        height: 14,
        backgroundImage: `url(${plus})`,
        backgroundSize: '14px 14px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },

    iconPlusInvert: {
        width: 14,
        height: 14,
        backgroundImage: `url(${plusInvert})`,
        backgroundSize: '14px 14px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
}))


export default function InputCounter({
  onChange,
  serviceId,
  updateCounter,
  initialValue,
  cartIndex
}) {
  const classes = useStyles();
  const minimumQty = 0;
  const maximumQty = 99;
 
  const [quantityItem, setQuantityItem] = useState(
    initialValue !== undefined ? initialValue.quantity : 0
  );


  const decreaseItems = () => {
    quantityItem > minimumQty
      ? setQuantityItem(quantityItem - 1)
      : setQuantityItem(0);
  };
  const increaseItems = () => {
    quantityItem < maximumQty
      ? setQuantityItem(quantityItem + 1)
      : setQuantityItem(99);
  };

  const updateIncreaseItems = () => {
    quantityItem < maximumQty
      ? setQuantityItem(quantityItem + 1)
      : setQuantityItem(99);

  };

  const updateDecreaseItems = () => {
    quantityItem < maximumQty
      ? setQuantityItem(quantityItem - 1)
      : setQuantityItem(99);
  }


  const setValue = (e) => {
    setQuantityItem(e.target.value);
    onChange(e);
  };

  return (
    <ButtonGroup size="small">
      <Button
        name="quantity"
        onClick={updateCounter ? updateDecreaseItems : decreaseItems}
        disabled={quantityItem <= minimumQty}
        classes={{
          root: classes.buttonCounter,
          disabled: classes.buttonCounterDisabled,
        }}
      >
        <i
          className={
            quantityItem <= minimumQty
              ? classes.iconMinus
              : classes.iconMinusInvert
          }
        />
      </Button>
      <InputBase
        type="number"
        value={quantityItem}
        onChange={setValue}
        readOnly
        classes={{ input: classes.inputCounter }}
        // onKeyDown={handleKeyCounter}
      />
      <Button
        onClick={updateCounter ? updateIncreaseItems : increaseItems}
        disabled={quantityItem > maximumQty}
        classes={{
          root: classes.buttonCounter,
          disabled: classes.buttonCounterDisabled,
        }}
      >
        <i
          className={
            quantityItem >= maximumQty
              ? classes.iconPlus
              : classes.iconPlusInvert
          }
        />
      </Button>
    </ButtonGroup>
  );
}

InputCounter.propTypes = {
  updateCounter: propTypes.bool,
};