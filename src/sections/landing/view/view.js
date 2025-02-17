"use client";

// @mui
import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

// components
import { useSettingsContext } from "@/src/components/settings";
import { TronWeb } from "tronweb";
import LoadingButton from "@mui/lab/LoadingButton";

export default function DashboardView() {
  const settings = useSettingsContext();

  const [wallet, setWallet] = useState({
    address: "",
    privateKey: "",
  });

  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [loading, setLoading] = useState(false);

  const tronWeb = new TronWeb({
    fullHost: "https://api.trongrid.io",
  });

  const generateVanityAddress = useCallback(async () => {
    setLoading(true);

    let found = false;
    let newWallet = {};

    while (!found) {
      const newAccount = await tronWeb.createAccount();
      const generatedAddress = newAccount.address.base58;

      if (
        generatedAddress.startsWith(prefix) &&
        generatedAddress.endsWith(suffix)
      ) {
        found = true;
        newWallet = {
          address: generatedAddress,
          privateKey: newAccount.privateKey,
        };

        console.log("✅ کیف پول مشابه پیدا شد!");
        console.log("آدرس: ", newWallet.address);
        console.log("کلید خصوصی: ", newWallet.privateKey);

        setWallet(newWallet);
        setLoading(false);
      }
    }

    return newWallet;
  }, [prefix, suffix]);

  console.log("fff", loading);

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <Box textAlign="center" sx={{ pt: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          کیف پول ترونی شما علی جان
        </Typography>
        <Box sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
          <TextField
            label="ابتدای آدرس (Prefix)"
            variant="outlined"
            fullWidth
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <TextField
            label="پایان آدرس (Suffix)"
            variant="outlined"
            fullWidth
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
        </Box>

        <LoadingButton
          onClick={generateVanityAddress}
          sx={{
            mt: 4,
            mb: 4,
            px: 4,
            py: 1.5,
            fontSize: "16px",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#0069d9",
            },
            position: "relative",
          }}
          color="primary"
          variant="contained"
          loading={loading}
        >
          ساخت کیف پول جدید
        </LoadingButton>

        {wallet.address && !loading && (
          <>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              آدرس: {wallet.address}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
              کلید خصوصی: {wallet.privateKey}
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}
