<?php

namespace C\P\ImageCode;

/**
 * 验证码接口
 * Interface CaptchaBuilderInterface
 * @package Minho\Captcha
 */
interface ImageCodeInterface
{
    /**
     * 创建验证图片
     * @return mixed
     */
    public function create();

    /**
     * 将验证码图片保存到指定路径
     * @param string $filename 物理路径
     * @param int $quality 清晰度
     * @return mixed
     */
    public function save($filename, $quality);

    /**
     * 获取验证码图片
     * @param int $quality 清晰度
     * @return mixed
     */
    public function output($quality);

    /**
     * 获取验证码内容
     * @return mixed
     */
    public function getText();
}