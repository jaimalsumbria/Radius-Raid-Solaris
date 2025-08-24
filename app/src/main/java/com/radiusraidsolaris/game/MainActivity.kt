package com.radiusraidsolaris.game

import android.annotation.SuppressLint
import android.app.AlertDialog
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader


class MainActivity : ComponentActivity() {
    private lateinit var webView: WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Fix for Motorola screen shift
        window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING)

        webView = WebView(this)

        webView.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        )
        webView.overScrollMode = WebView.OVER_SCROLL_NEVER

        val settings = webView.settings

        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.loadWithOverviewMode = true
        settings.useWideViewPort = true

        webView.scrollBarStyle = WebView.SCROLLBARS_OUTSIDE_OVERLAY

        // Optional: Keep GPU rendering smooth
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null)

        // Debugging if needed
        WebView.setWebContentsDebuggingEnabled(true)

        // Enable JavaScript for HTML5 games
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true

        // Ensures links open inside WebView, not in browser
        webView.webViewClient = WebViewClient()

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }
        }

// Load index.html via http:// scheme (not file://)
        webView.loadUrl("https://appassets.androidplatform.net/assets/raduisraidsolaris/index.html")

        setContentView(webView)
        // Edge-to-edge + hide system bars (modern way)
        WindowCompat.setDecorFitsSystemWindows(window, false)
        hideSystemBars()
    }

    private fun hideSystemBars() {
        val controller = WindowInsetsControllerCompat(window, window.decorView)
        controller.hide(
            WindowInsetsCompat.Type.statusBars() or WindowInsetsCompat.Type.navigationBars()
        )
        controller.systemBarsBehavior =
            WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) hideSystemBars() // re-hide after user swipe or focus changes
    }

    override fun onResume() {
        super.onResume()
        hideSystemBars()
    }

    @SuppressLint("MissingSuperCall")
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            // Go back in webview history if possible
            webView.goBack()
        } else {
            // Show exit confirmation popup
            AlertDialog.Builder(this)
                .setTitle("Exit Game")
                .setMessage("Are you sure you want to exit?")
                .setPositiveButton("Yes") { _, _ -> finish() }
                .setNegativeButton("No", null)
                .show()
        }
    }

}
