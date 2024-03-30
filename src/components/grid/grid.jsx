import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "10px",
  marginTop: "30px",
  textAlign: "center",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
}));

function findUniqueNumber(arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] === 1) {
      return parseInt(key);
    }
  }

  return null;
}

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

function sortByParity(arr) {
  let even = arr.filter((num) => num % 2 === 0);
  let odd = arr.filter((num) => num % 2 !== 0);
  return even.concat(odd);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fibonacci(n) {
  let sequence = [1, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.slice(0, n);
}

function GridBox() {
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleOpen = (type) => {
    setDialogType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = () => {
    let result;
    if (dialogType === "findUniqueNumber") {
      const input = inputValue
        .split(",")
        .map((value) => parseInt(value.trim()));
      result = findUniqueNumber(input);
    } else if (dialogType === "isPalindrome") {
      result = isPalindrome(inputValue);
    } else if (dialogType === "sortByParity") {
      const input = inputValue
        .split(",")
        .map((value) => parseInt(value.trim()));
      result = sortByParity(input);
    } else if (dialogType === "factorial") {
      const input = parseInt(inputValue.trim());
      result = factorial(input);
    } else if (dialogType === "fibonacci") {
      const input = parseInt(inputValue.trim());
      result = fibonacci(input);
    }
    setResult(result);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid xs={2} sm={4} onClick={() => handleOpen("findUniqueNumber")}>
          <Item>1. Encontrar número não repetido</Item>
        </Grid>
        <Grid xs={2} sm={4} onClick={() => handleOpen("isPalindrome")}>
          <Item>2. Verificação de Palíndromo</Item>
        </Grid>
        <Grid xs={2} sm={4} onClick={() => handleOpen("sortByParity")}>
          <Item>3. Ordenação de Números Pares e Ímpares:</Item>
        </Grid>
        <Grid xs={2} sm={4} onClick={() => handleOpen("factorial")}>
          <Item>
            4. Escreva um algoritmo para calcular o fatorial de um número.
          </Item>
        </Grid>
        <Grid xs={2} sm={4} onClick={() => handleOpen("fibonacci")}>
          <Item>5. Fibonacci:</Item>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {dialogType === "findUniqueNumber"
            ? "Encontrar número não repetido"
            : dialogType === "isPalindrome"
            ? "Verificação de Palíndromo"
            : dialogType === "sortByParity"
            ? "Ordenação de Números Pares e Ímpares"
            : dialogType === "factorial"
            ? "Calcular o fatorial de um número"
            : dialogType === "fibonacci"
            ? "Sequência Fibonacci"
            : ""}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label={
              dialogType === "findUniqueNumber"
                ? "Valores (separados por vírgula)"
                : dialogType === "sortByParity"
                ? "Valores (separados por vírgula)"
                : dialogType === "factorial" || dialogType === "fibonacci"
                ? "Número"
                : "String"
            }
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button variant="contained" onClick={handleFormSubmit} sx={{ mt: 2 }}>
            Calcular
          </Button>
        </DialogContent>
      </Dialog>

      {result !== null && (
        <Dialog open={result !== null} onClose={() => setResult(null)}>
          <DialogContent>
            <p>O resultado é: {result.toString()}</p>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}

export default GridBox;
